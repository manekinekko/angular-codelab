Nantes Devfest 2015
=======

Angular 2 Codelab: Let's develop a simple Angular 2 application and get familiar with the new concepts.

- **Note:** Angular 2.0 is not production ready yet!
- **Current verison:** ALPHA-45

# Slides

https://slides.com/wassimchegham/getting-started-with-angular-2/

# Your Feedback

Please take a minute and give us your feedback about Angular 2: http://bit.ly/devfest-2015-ng2-codelab

# Docucmentation
### Application tree components

![Components tree](https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-components-tree-details.png)

### The app we are going to build

<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-home.png" width="250px"/>
<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-technology.png" width="250px"/>
<img src="https://github.com/manekinekko/devfest-2015-ng2-codelab/raw/master/documentation/devfest-summary.png" width="250px"/>

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
├── __build__/
│   ├── app.js
│   ├── bootstrap.js
│   ├── components/
│   ├── data/
│   ├── fonts/
│   ├── images/
│   ├── index.html
│   ├── routes.config.js
│   ├── services/
│   ├── styles/
│   └── vendor/
├── bower.json
├── bower_components/
├── documentation/
├── fonts/
├── gulpfile.js
├── images/
├── karma.conf.js
├── package.json
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── bootstrap.ts
│   │   ├── components/
│   │   ├── data/
│   │   ├── index.html
│   │   ├── routes.config.ts
│   │   ├── services/
│   │   ├── styles/
│   │   ├── system.config.js
│   │   └── typings/
│   └── tsconfig.json
├── test/
├── tsd.json
├── tsd_typings/
└── typings/
```
