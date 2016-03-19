import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'question-card',
  styles: [`
		:host {margin: 1px;}
		.mdl-menu {z-index: 0;}
		.mdl-switch__label {display: inline-block; width: 100%; height: 40px;}
		.answer {display: inline-block; width: 20px; height: 20px; position: relative; right: 33px; top: -1px;}
		.correct {color: green;}
		.wrong {color: red;}
	`],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/components/question-card/question-card.html',
  directives: [ROUTER_DIRECTIVES]
})
export class QuestionCard {}
