/// <reference path="../../typings/_custom.d.ts" />

import {Component, View, NgFor, ViewEncapsulation} from 'angular2/angular2';

import {Card} from 'components/card/card';
import {QuestionDataService} from 'services/QuestionDataService';

@Component({
  selector: 'home',
  bindings: [QuestionDataService]
})
@View({
  templateUrl: './components/home/home.html',
  directives: [NgFor, Card],
  encapsulation: ViewEncapsulation.None
})
export class Home {
  cards: any[];
  
  constructor(QuestionService: QuestionDataService){
    this.cards = QuestionService.list();
  }
}
