/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';
import { QuestionsStore, IQuestion } from '../../services/QuestionsStore';
import { QuestionCard } from '../technology/question-card/question-card';

@Component({
	selector: 'summary',
	template: `
		<question-card [question]="question" *ng-for="#question of questions"></question-card>
	`,
	directives: [NgFor, QuestionCard]
})
export class Summary {
	
	private questions: IQuestion[];
	
	constructor(questionsStore: QuestionsStore) {
		questionsStore.fetch().then( (questions) => this.questions = questions );
	}
	
	onInit() {}
}