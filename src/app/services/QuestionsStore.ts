/// <reference path="../typings/_custom.d.ts" />

import { Provider } from 'angular2/angular2';
import { QUESTIONS } from '../data/questions';

export enum QUESTION {
  NEXT, PREVIOUS
}

export interface IChoice {
	id: string;
	label: string;
	correct: boolean;
	checked?: boolean;
	toggle(): void;
}

export interface IQuestion {
	id: string;
	title: string;
	description: string;
	choices: IChoice[];
	toggle(choice: IChoice): void;
}

export interface IQuestionsStore {
	fetch(filterId?: string): Promise<IQuestion[]>;
	computeResult(): number;
}

class Choice implements IChoice {
	id: string;
	label: string;
	correct: boolean;
	checked: boolean;
	constructor(choice?: IChoice) {
		if(choice) {
			this.id = choice.id;
			this.label = choice.label;
			this.correct = choice.correct;
			this.checked = choice.checked || false;
		}
	}
	toggle() {
		this.checked = ! this.checked;
	}
}

export class Question implements IQuestion {
	id = '';
	title = '';
	description = '';
	choices: IChoice[] = [];	
	constructor(question?: IQuestion) {
		if(question) {
			this.id = question.id;
			this.title = question.title;
			this.description = question.description;
			this.choices = question.choices.map( (choice: IChoice) => new Choice(choice) );
		}
	}
	
	toggle(choice: IChoice): void {
		let index = this.find(choice);
		if( index !== undefined ){
			this.choices[index].toggle();
		}
	}
	
	private find(choice: IChoice) {
		return this.choices.findIndex( (_choice: IChoice) => _choice.id === choice.id);
	}
}

export class QuestionsStore {
	
	private questions: IQuestion[];
	
	constructor(){
		this.questions = QUESTIONS.map( (question: IQuestion) => new Question(question));
		console.log('>>>> QuestionsStore', this.questions);	
	}
	
	fetch(filterId?: string): Promise<IQuestion[]> {
		let data = this.questions;
		
		if(filterId) {
			data = data.filter( (question: IQuestion) => question.id === filterId);
		}
		
		if(data) {
			return Promise.resolve(data);
		}
		else {
			return <any>(Promise.reject([]));
		}
	}
	
	computeResult(): number {
		return this.questions
			.map( (question: IQuestion) => question.choices )
			.map( (choices: IChoice[] ) => choices.filter( (choice: IChoice) => choice.checked === choice.correct ) )
			.filter( (choices: IChoice[]) => choices.length > 0 )
			.length;
	}
}
