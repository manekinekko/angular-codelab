/// <reference path="../../../typings/_custom.d.ts" />

import { Component, Input, NgFor, ViewEncapsulation } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { Technology } from '../technology';
import { IQuestion, IChoice, Question } from '../../../services/QuestionsStore';

@Component({
	selector: 'question-card',
	templateUrl: './components/technology/question-card/question-card.html',
	directives: [NgFor],
	encapsulation: ViewEncapsulation.None
})
export class QuestionCard {
	
	@Input() question: IQuestion;
	
	constructor() {
		//this.question = new Question();
	}
	
	onInit() {
		console.log('onInit', this.question);
	}
	
	onChange($event, choice: IChoice) {
		console.log('onChange', $event, choice);
		this.question.toggle(choice);
	}
	
}