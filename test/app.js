/// <reference path="typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var toolbar_1 = require('./components/toolbar/toolbar');
var routes_config_1 = require('./routes.config');
var Devfest = (function () {
    function Devfest(router) {
        router.navigate(['/Home']);
    }
    Devfest = __decorate([
        angular2_1.Component({
            selector: 'devfest',
            template: '<toolbar></toolbar>',
            directives: [toolbar_1.Toolbar]
        }),
        router_1.RouteConfig(routes_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Devfest);
    return Devfest;
})();
exports.Devfest = Devfest;
