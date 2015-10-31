Nantes Devfest 2015
=======

Angular 2 Codelab: Let's develop a simple Angular 2 application and get familiar with the new concepts.

**Note:** Angular 2.0 is not production ready yet!
**Current verison:** ALPHA-45

# Slides

https://slides.com/wassimchegham/getting-started-with-angular-2/

# Your Feedback

Please take a minute and give us your feedback about Angular 2. https://docs.google.com/forms/d/1GnPT8iupzDIO0c-4EZj90DfZhGvatx9_yVgnN-0D63U/edit

# Docucmentation
### App tree

![Components tree](https://raw.githubusercontent.com/manekinekko/devfest-2015-ng2-codelab/master/documentation/devfest-components-tree.png?token=ABnuHSKZPhfhz8xdhTxqV2zifSHeOe_Fks5WPd0QwA%3D%3D)

![Home screen](https://raw.githubusercontent.com/manekinekko/devfest-2015-ng2-codelab/master/documentation/devfest-home.png?token=ABnuHY7DJsez6SfUhrOtONqiiCoyIvJYks5WPd0kwA%3D%3D)

![Technology screen](https://raw.githubusercontent.com/manekinekko/devfest-2015-ng2-codelab/master/documentation/devfest-technology.png?token=ABnuHV-ADBOuS8B7joFneEc0sk7OlmMXks5WPd0zwA%3D%3D)

# How to start

```bash
git clone https://github.com/manekinekko/devfest-2015-ng2-codelab
cd !$
npm install -g gulp bower tsd
npm install
gulp
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

# Running local dev server

```bash
gulp serve
```
