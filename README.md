Nantes Devfest 2015
=======

[![Join the chat at https://gitter.im/manekinekko/devfest-2015-ng2-codelab](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/manekinekko/devfest-2015-ng2-codelab?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/manekinekko/devfest-2015-ng2-codelab.svg)](https://david-dm.org/manekinekko/devfest-2015-ng2-codelab)
[![devDependency Status](https://david-dm.org/manekinekko/devfest-2015-ng2-codelab.svg)](https://david-dm.org/manekinekko/devfest-2015-ng2-codelab#info=devDependencies)
[![npm version](https://badge.fury.io/js/angular2.svg)](http://badge.fury.io/js/angular2)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/angular2-ci.svg)](https://saucelabs.com/u/angular2-ci)


Angular 2 Codelab: Let's develop a simple Angular 2 application and get familiar with the new concepts.

- **Note:** Angular 2.0 is not production ready yet!
- **Verison used in this app:** ALPHA-46

# Slides

https://slides.com/wassimchegham/getting-started-with-angular-2/

# Documentation
### Application tree components

![Components tree](https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-components-tree-details.png)

### The app we are going to build

<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-home.png" width="235px"/>
<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-technology.png" width="235px"/>
<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-summary.png" width="235px"/>

# How to start

```bash
git clone https://github.com/manekinekko/devfest-2015-ng2-codelab
cd $_
npm install -g gulp bower tsd
npm install
bower install
gulp serve # run a local dev server
```

# Directory Structure

```
.
├── LICENSE
├── README.md
├── documentation/
├── ng2-codelab/
│   ├── ember-cli-buid.js
│   ├── karma-test-shim.js
│   ├── karma.conf.js
│   ├── package.json
│   ├── dist/
│   │   ├── app.js
│   │   ├── index.html
│   │   ├── app
│   │   │   ├── ng2-codelab.js
│   │   │   ├── routes.config.js
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   ├── pipe/
│   │   │   ├── services/
│   │   ├── css
│   │   ├── vendor
│   ├── src/
│   │   ├── app.ts
│   │   ├── index.html
│   │   ├── tsconfig.json
│   │   ├── tsd.json
│   │   ├── app/
│   │   │   ├── ng2-codelab.ts
│   │   │   ├── routes.config.ts
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   ├── pipe/
│   │   │   ├── services/
│   │   ├── images/
│   │   ├── styles/
```
