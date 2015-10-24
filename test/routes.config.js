var home_1 = require('./components/home/home');
var technology_1 = require('./components/technology/technology');
exports.Routes = {
    home: {
        path: '/home',
        component: home_1.Home,
        as: 'Home'
    },
    technology: {
        path: '/technology/:name',
        component: technology_1.Technology,
        as: 'Technology'
    }
};
exports.APP_ROUTES = [
    this.Routes.home,
    this.Routes.technology
];
