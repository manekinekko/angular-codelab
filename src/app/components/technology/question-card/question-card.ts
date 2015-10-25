/// <reference path="../../../typings/_custom.d.ts" />

import { Component, NgFor, Input, Output, EventEmitter } from 'angular2/angular2';
import { Technology } from '../technology';
import { IQuestion, Question } from '../../../services/QuestionsStore';

@Component({
	selector: 'question-card',
	templateUrl: './components/technology/question-card/question-card.html',
	directives: [ NgFor ]
})
export class QuestionCard {
	
	@Input() question: IQuestion;
	
	// called on parent
	@Output() onNextQuestion: EventEmitter; 
	
	constructor() {
		this.question = new Question();
		this.onNextQuestion = new EventEmitter();
	}
	
	onInit() {
		console.log('onInit', this.question); // valid
	}
	
	nextQuestion() {
		//this.onNextQuestion.next(null);
	}
	
}