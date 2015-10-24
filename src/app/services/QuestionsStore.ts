/// <reference path="../typings/_custom.d.ts" />

import { QUESTIONS } from '../data/questions';

export interface IQuestion {
	title: string;
	choices: {
		label: string,
		correct: boolean
	}[];
}

export class QuestionsStore {
	fetch(filer: string): Promise<IQuestion[]> {
		return Promise.resolve(QUESTIONS);
	}
}