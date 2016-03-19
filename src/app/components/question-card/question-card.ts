import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'question-card',
  templateUrl: './app/components/question-card/question-card.html',
  directives: [ROUTER_DIRECTIVES]
})
export class QuestionCard {}
