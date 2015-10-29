/// <reference path="../../../typings/_custom.d.ts" />

import { Component, Input, NgFor, ViewEncapsulation, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { Technology } from '../technology';
import { IQuestion, IChoice, Question } from '../../../services/QuestionsStore';

@Component({
	selector: 'question-card',
	templateUrl: './components/technology/question-card/question-card.html',
	styles: [
		'.mdl-menu {z-index: 0;}',
		'.mdl-switch__label {display: inline-block; width: 100%; height: 40px;}',
		'.mdl-card {margin: 0 auto;}'
	],
	directives: [NgFor, FORM_DIRECTIVES],
	encapsulation: ViewEncapsulation.None
})
export class QuestionCard {
	
	@Input() question: IQuestion;
	
	afterViewInit() {
		console.log('afterViewInit', this.question);
	}
	
	onCheckedChange($event, choice: IChoice) {
		console.log('onCheckedChange', $event, choice);
		this.question.toggle(choice);
	}
	
	onChange() {
		console.log('change detector QuestionCard');
	}
	
}