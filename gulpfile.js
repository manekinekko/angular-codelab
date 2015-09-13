"use strict";

var Builder = require('systemjs-builder');
var del = require('del');
var fs = require('fs');
var path = require('path');
var join = path.join;
var karma = require('karma').server;
var runSequence = require('run-sequence');
var semver = require('semver');
var series = require('stream-series');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Functions

function root(_path) {
  return (_path.indexOf('!')>=0 ? '!':'') + path.join(__dirname, _path);
}

function rootDir(dir) {
  return dir.map(root);
}

function transformPath() {
  return function (filepath) {
    arguments[0] = join('vendor', filepath.split('/').pop());
    return $.inject.transform.apply($.inject.transform, arguments);
  };
}

// Configuration

var DEST_FOLDER = '__build__';
var serverport = 3000;
var paths = {
  
  config: {
    karma: root('karma.conf.js'),
    tsconfig: root('tsconfig.json')
  },
  
  dest: {
    folder: root(DEST_FOLDER),
    vendor: root(DEST_FOLDER + '/vendor'),
    fonts: root(DEST_FOLDER + '/fonts'),
    test: root('test')
  },
  
  src: {
    everything: root('app/**'),
    index: root('app/index.html'),
    ts: rootDir([
      'app/**/*.ts', 
      '!app/init.ts',
      '!app/**/*_spec.ts'
    ]),
    assets: rootDir([
      'app/**/*.html',
      'app/**/*.css'
    ]),
    fonts: rootDir([
      'fonts/**/*'
    ]),
    vendor: [
      'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
      'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/reflect-metadata/Reflect.js.map',
      'node_modules/systemjs/dist/system.src.js',
      'app/system.config.js',
      'node_modules/chance/dist/chance.min.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/http.dev.js',
      
      'bower_components/material-design-lite/material.js',
      'bower_components/material-design-lite/material.css',
      'app/app.css'
    ]
  },
  
  specs: rootDir([
    'app/**/*_spec.ts'
  ]),
  
  clean: {
    dev: DEST_FOLDER,
    app: rootDir([
      DEST_FOLDER,
      '!' + DEST_FOLDER + '/vendor'
    ]),
    typings: root('tsd_typings/'),
    everything: rootDir([
      DEST_FOLDER,
      'build/',
      'tsd_typings/',
      'node_modules/angular2/',
      'angular/modules/angular2/typings/',
      'angular/dist/'
    ])
  }
};

var HTMLMinifierOpts = { conditionals: true };

var tsProject = $.typescript.createProject(paths.config.tsconfig, {
  typescript: require('typescript')
});

// Default task

gulp.task('default', ['build']);

// Clean

gulp.task('clean', function (done) {
  del(paths.clean.everything, done);
});

gulp.task('clean:typings', function(done) {
  del(paths.clean.typings, done);
});

gulp.task('clean:app', function(done) {
  del(paths.clean.app, done);
});

gulp.task('clean:dev', function(done) {
  del(paths.clean.dev, done);
});

// Build dev

gulp.task('build:vendor', function () {
  return gulp.src(paths.src.vendor)
    .pipe(gulp.dest(paths.dest.vendor));
});

gulp.task('build:fonts', function () {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dest.fonts));
});

gulp.task('build:typescript', function () {
  var result = gulp.src(paths.src.ts)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject));

  return result.js
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dest.folder));
});

gulp.task('build:assets', function () {
  return gulp.src(paths.src.assets)
    .pipe(gulp.dest(paths.dest.folder))
    .pipe(browserSync.stream());
});

gulp.task('build:index', function () {
  var target = gulp.src(paths.src.index);
  var sources = gulp.src(paths.src.vendor, { read: false, relative: true});
  return target.pipe($.inject(sources, {transform: transformPath()}))
    .pipe(gulp.dest(paths.dest.folder));
});

gulp.task('build:app', function (done) {
  runSequence('clean:dev', 'build:fonts', 'build:assets', 'build:typescript', 'build:index', done);
});

gulp.task('build', function (done) {
  runSequence('clean:app', 'build:app', 'build:vendor', done);
});

// Post install (NPM lifecycle)

gulp.task('install:typings', ['clean:typings'], $.shell.task([
  'tsd reinstall --overwrite',
  'tsd link',
  'tsd rebundle'
]));

gulp.task('postinstall', function (done) {
  runSequence('install:typings', done);
});

// Test

gulp.task('build:test', function() {
  var result = gulp.src(paths.src.ts)
    .pipe($.plumber())
    .pipe($.inlineNg2Template({ base: 'app' }))
    .pipe($.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(paths.dest.test));
});

gulp.task('karma:start', ['build:test'], function(done) {

  karma.start({
    configFile: paths.config.karma,
    singleRun: true
  }, done);
});

gulp.task('test:dev', ['build:test'], function() {
  $.watch(paths.src.everything, function() {
    gulp.start('build:test');
  });
});

gulp.task('test', ['karma:start'], function() {
  $.watch(paths.src.everything, function() {
    gulp.start('karma:start');
  });
});

gulp.task('jasmine', ['build:app'], function() {

  var terminalReporter = new $.jasmineReporters.TerminalReporter({
    verbose: 3,
    showStack: true,
    color: true
  });

  var SpecReporter = require('jasmine-spec-reporter');
  var specReporter = new SpecReporter();

  return gulp.src(paths.specs).
    pipe($.jasmine({
      verbose: true,
      includeStackTrace: true,
      reporter: specReporter
    }));

});


// Serve dev.

gulp.task('serve', ['build'], function () {
  browserSync({
    port: serverport,
    files: paths.dest.folder,
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'info',
    logPrefix: 'DevFest-2015',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: DEST_FOLDER,
      middleware: superstatic({ debug: false})
    }
  });
  
  $.watch([].concat(paths.src.ts).concat(paths.src.assets), function() {
    gulp.start('build');
  });
    
});