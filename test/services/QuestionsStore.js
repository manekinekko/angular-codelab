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
var QuestionsStore = (function () {
    function QuestionsStore() {
    }
    QuestionsStore.prototype.fetch = function () {
        return Array.apply(null, { length: 5 }).map(function (item, index) {
            return {
                title: "Question #" + (index + 1) + " : ",
                choices: [{
                        label: 'response A',
                        correct: true
                    }, {
                        label: 'response B',
                        correct: false
                    }, {
                        label: 'response C',
                        correct: false
                    }, {
                        label: 'response D',
                        correct: false
                    }]
            };
        });
    };
    QuestionsStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionsStore);
    return QuestionsStore;
})();
exports.QuestionsStore = QuestionsStore;
