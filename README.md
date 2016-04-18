Angular2 Codelab
=======

[![GetBadges Game](https://manekinekko-angular2-codelab.getbadges.io/shield/company/manekinekko-angular2-codelab)](https://manekinekko-angular2-codelab.getbadges.io/?ref=shield-game)
[![Join the chat at https://gitter.im/manekinekko/angular2-codelab](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/manekinekko/angular2-codelab?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/manekinekko/angular2-codelab.svg)](https://david-dm.org/manekinekko/angular2-codelab)
[![devDependency Status](https://david-dm.org/manekinekko/angular2-codelab.svg)](https://david-dm.org/manekinekko/angular2-codelab#info=devDependencies)
[![npm version](https://badge.fury.io/js/angular2.svg)](http://badge.fury.io/js/angular2)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/angular2-ci.svg)](https://saucelabs.com/u/angular2-ci)


Angular 2 Codelab: Let's develop a simple Angular 2 application and get familiar with the new concepts.

- **Note:** Angular 2.0 is not production ready yet!
- **Version used in this app:** BETA-8

# Slides

https://slides.com/wassimchegham/getting-started-with-angular-2/

### The app we are going to build

<img src="https://github.com/manekinekko/angular2-codelab/raw/master/documentation/devfest-home.png" width="235px"/>
<img src="https://github.com/manekinekko/angular2-codelab/raw/master/documentation/devfest-technology.png" width="235px"/>
<img src="https://github.com/manekinekko/angular2-codelab/raw/master/documentation/devfest-summary.png" width="235px"/>

# Before you start

```bash
$ npm install -g angular-cli@0.0.23 typings@0.6.8
$ # optional deps
$ npm install -g \
      tslint@3.4.0 \
      clang-format@1.0.35 \
      webdriver-manager@8.0.0 \
      protractor@3.1.1
```

# How to start

The branch **step-1** is the first one for starting with an empty base.

```bash
$ git clone -b step-1 https://github.com/manekinekko/angular2-codelab.git
$ cd $_
$ npm install
$ ng serve
```

# Solutions for each step

Each step has a linked branch named step-**X**-**solution**

# Steps

[Details here](STEPS.md)

# Directory Structure

```
├── LICENSE
├── README.md
├── STEPS.md
├── config/
├── dist/
├── documentation/
├── e2e/
├── ember-cli-build.js
├── karma-test-shim.js
├── karma.conf.js
├── node_modules/
├── package.json
├── protractor.conf.js
├── src
│   ├── app/
│   ├── app.ts
│   ├── favicon.ico
│   ├── images/
│   ├── index.html
│   ├── styles/
│   ├── tsconfig.json
│   └── typings.d.ts
├── tmp/
├── typings/
└── typings.json
```

# Documentation
### Application tree components

![Components tree](https://github.com/manekinekko/angular2-codelab/raw/master/documentation/devfest-components-tree-details.png)

### Application graph dependencies

![Components tree](https://github.com/manekinekko/angular2-codelab/raw/master/documentation/devfest-components-deps-graph.png)

# LICENSE
The MIT License Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
