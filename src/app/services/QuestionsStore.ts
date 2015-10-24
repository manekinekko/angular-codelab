/// <reference path="../typings/_custom.d.ts" />

import { Injectable } from 'angular2/core';

export interface IQuestion {
	title: string;
	choices: {
		label: string,
		correct: boolean
	}[];
}

@Injectable()
export class QuestionsStore {
	fetch(): IQuestion[] {
		return Array.apply(null, {length: 5}).map((item, index) => {
			return {
				title: `Question #${index+1} : `,
				choices: [{
					label: 'response A',
					correct: true
				}, {
					label: 'response B',
					correct: false
				}, {
					label: 'response C',
					correct: false
				}, {
					label: 'response D',
					correct: false
				}]
			}
		});
	}
}