/// <reference path="../../typings/_custom.d.ts" />
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
var dom_adapter_1 = require('angular2/src/core/dom/dom_adapter');
var FixScrolling = (function () {
    function FixScrolling(elementRef) {
        this.elementRef = elementRef;
        this.body = dom_adapter_1.DOM.query('body');
        this.setHeight();
    }
    FixScrolling.prototype.onResize = function (event) {
        this.setHeight();
    };
    FixScrolling.prototype.setHeight = function () {
        var height = this.body.getBoundingClientRect().height;
        dom_adapter_1.DOM.setStyle(this.elementRef.nativeElement, 'height', height + "px");
    };
    FixScrolling = __decorate([
        angular2_1.Directive({
            selector: '[fix-scrolling]',
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], FixScrolling);
    return FixScrolling;
})();
exports.FixScrolling = FixScrolling;
