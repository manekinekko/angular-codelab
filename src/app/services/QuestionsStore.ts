/// <reference path="../typings/_custom.d.ts" />

import { QUESTIONS } from '../data/questions';

export interface IQuestion {
	title: string;
	description: string;
	choices: {
		label: string,
		correct: boolean,
		checked?: boolean
	}[];
}

export class Question implements IQuestion {
	title = '';
	description = '';
	choices = [];
}

export class QuestionsStore {
	fetch(filer: string): Promise<IQuestion[]> {
		return Promise.resolve(QUESTIONS);
	}
}
