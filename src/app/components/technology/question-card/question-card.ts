/// <reference path="../../../typings/_custom.d.ts" />

import { Component, NgFor, Input, Output, EventEmitter } from 'angular2/angular2';
import { Technology } from '../technology';
import { IQuestion } from '../../../services/QuestionsStore';

@Component({
	selector: 'question-card',
	templateUrl: './components/technology/question-card/question-card.html',
	directives: [ NgFor ]
})
export class QuestionCard {
	
	@Input() question: IQuestion;
	@Output('onNextQuestion') onNext: EventEmitter; 
	
	constructor() {
		console.log(this.question); // undefined
		this.onNext = new EventEmitter();
	}
	
	onInit() {
		console.log(this.question); // valid
	}
	
	next() {
		this.onNext.next('done');
	}
	
}