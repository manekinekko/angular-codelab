/// <reference path="../typings/_custom.d.ts" />
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
var core_1 = require('angular2/core');
var TechnologiesStore = (function () {
    function TechnologiesStore() {
    }
    TechnologiesStore.prototype.fetch = function () {
        return [{
                slug: 'typescript',
                title: 'TypeScript',
                logo: 'images/typescript.png',
                description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
            }, {
                slug: 'ecma',
                title: 'ECMAScript 6',
                logo: 'images/js.jpg',
                description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
            }, {
                slug: 'ng2',
                title: 'Angular 2',
                logo: 'images/angular2.jpg',
                description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
            }, {
                slug: 'react',
                title: 'React',
                logo: 'images/react.svg',
                description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
            }];
    };
    TechnologiesStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TechnologiesStore);
    return TechnologiesStore;
})();
exports.TechnologiesStore = TechnologiesStore;
