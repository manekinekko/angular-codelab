System.config({
  map: {
    bootstrap: './'
  },
  packages: {
    bootstrap: {
      main: './bootstrap.js',
      defaultExtension: 'js'
    }
  }
});


System.import('bootstrap').catch(console.error);