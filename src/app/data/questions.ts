/// <reference path="../typings/_custom.d.ts" />

import { Chance } from 'chance';

let gimme = (max: Number, definition: Function) => {
	return Array.apply(null, {length: max}).map(definition);
}

export const QUESTIONS = gimme(5, (item, index) => {
	return {
		title: `Question #${index+1} : `,
		description: chance.sentence(),
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