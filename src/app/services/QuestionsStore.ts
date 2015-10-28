/// <reference path="../typings/_custom.d.ts" />

import { QUESTIONS } from '../data/questions';

export interface IChoice {
	id: string;
	label: string,
	correct: boolean,
	checked?: boolean
}

export interface IQuestion {
	id: string;
	title: string;
	description: string;
	choices: IChoice[];
	
	toggle(choice: IChoice): void;
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
			this.choices = question.choices;
		}
	}
	
	toggle(choice: IChoice): void {
		let index = this.find(choice);
		if( index !== undefined ){
			this.choices[index].checked = ! this.choices[index].checked;
		}
	}
	
	private find(choice: IChoice) {
		return this.choices.findIndex( (_choice: IChoice) => _choice.id === choice.id);
	}
}

export class QuestionsStore {
	
	private questions: IQuestion[];
	
	constructor(){
		this.questions = QUESTIONS;
	}
	
	fetch(filterId?: string): Promise<IQuestion[]> {
		let data = this.questions;
		
		console.log(filterId)
		
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
}
