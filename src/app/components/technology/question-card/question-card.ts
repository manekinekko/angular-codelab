/// <reference path="../../../typings/_custom.d.ts" />

import { Component, NgFor, Input } from 'angular2/angular2';
import { IQuestion } from '../../../services/QuestionsStore';

@Component({
	selector: 'question-card',
	templateUrl: './components/technology/question-card/question-card.html',
	directives: [ NgFor ]
})
export class QuestionCard {
	@Input() private question: IQuestion;
	
	constructor() {
		
	}
	
	next() {
		
	}
}