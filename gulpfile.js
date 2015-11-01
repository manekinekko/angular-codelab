"use strict";

var Builder = require('systemjs-builder');
var del = require('del');
var fs = require('fs');
var path = require('path');
var join = path.join;
var runSequence = require('run-sequence');
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
    tsconfig: root('src/tsconfig.json')
  },
  
  dest: {
    folder: root(DEST_FOLDER),
    vendor: root(DEST_FOLDER + '/vendor'),
    fonts: root(DEST_FOLDER + '/fonts'),
    images: root(DEST_FOLDER + '/images'),
    styles: root(DEST_FOLDER + '/styles'),
    test: root('test')
  },
  
  src: {
    everything: root('src/app/**'),
    index: root('src/app/index.html'),
    ts: rootDir([
      'src/app/**/*.ts', 
      '!app/init.ts',
      '!app/**/*_spec.ts'
    ]),
    html: rootDir([
      'src/app/**/*.html'
    ]),
    styles: rootDir([
      'src/app/styles/**/*.css'
    ]),
    images: rootDir([
      'images/**/*'
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
      
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/http.dev.js',

      'node_modules/chance/dist/chance.min.js',
      
      'bower_components/material-design-lite/material.js',
      'bower_components/material-design-lite/material.css',      
      
      'src/app/styles/app.css',
      'src/app/system.config.js'
    ]
  },
  
  clean: {
    dev: DEST_FOLDER,
    app: rootDir([
      DEST_FOLDER,
      '!' + DEST_FOLDER + '/vendor'
    ]),
    typings: root('tsd_typings/'),
    everything: rootDir([
      DEST_FOLDER
    ])
  }
};

var tsProject = $.typescript.createProject(paths.config.tsconfig, {
  typescript: require('typescript')
});

// Default task

gulp.task('default', ['serve']);

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
    .pipe(gulp.dest(paths.dest.vendor))
    .pipe(browserSync.stream());
});

gulp.task('build:fonts', function () {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dest.fonts))
    .pipe(browserSync.stream());
});

gulp.task('build:images', function () {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dest.images))
    .pipe(browserSync.stream());
});

gulp.task('build:typescript', function () {
  var result = gulp.src(paths.src.ts)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject));

  return result.js
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dest.folder))
    .pipe(browserSync.stream());
});

gulp.task('build:html', function () {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dest.folder))
    .pipe(browserSync.stream());
});

gulp.task('build:styles', function () {
  return gulp.src(paths.src.styles)
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(browserSync.stream());
});

gulp.task('build:index', function () {
  var target = gulp.src(paths.src.index);
  var sources = gulp.src(paths.src.vendor, { read: false, relative: true});
  
  return target.pipe($.inject(sources, {transform: transformPath()}))
    .pipe(gulp.dest(paths.dest.folder))
    .pipe(browserSync.stream());
});

gulp.task('build:app', function (done) {
  runSequence('build:fonts', 'build:images', 'build:html', 'build:styles', 'build:typescript', 'build:index', done);
});

gulp.task('build', function (done) {
  runSequence('clean', 'build:app', 'build:vendor', done);
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

// Serve dev.

gulp.task('serve', ['build'], function () {
  
  browserSync.init({
    port: serverport,
    watchOptions: {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      }
    },
    files: paths.dest.folder,
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'info',
    logPrefix: 'DevFest-2015',
    notify: true,
    server: {
      baseDir: DEST_FOLDER
    }
  });
  
  gulp.watch(paths.src.ts, ['build:typescript']);
  gulp.watch(paths.src.html, ['build:html']);
  gulp.watch(paths.src.styles, ['build:styles']);
  gulp.watch(paths.src.vendor, ['build:vendor']);
  gulp.watch(paths.src.index, ['build:index']);
  
  /*gulp.watch([].concat(paths.src.ts, paths.src.html, paths.src.styles, paths.src.vendor), function() {
    gulp.start('build');
  }).on('change', browserSync.reload);*/
    
});
