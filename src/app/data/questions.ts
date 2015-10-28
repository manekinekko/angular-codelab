/// <reference path="../typings/_custom.d.ts" />

import { Chance } from 'chance';

let gimme = (max: Number, definition: Function) => {
	return Array.apply(null, {length: max}).map(definition);
}

export const QUESTIONS = gimme(5, (item, index) => {
	return {
		id: chance.guid(),
		title: `Question #${index+1} : `,
		description: chance.sentence(25),
		choices: [{
			id: chance.guid(),
			label: chance.word(),
			correct: true
		}, {
			id: chance.guid(),
			label: chance.word(),
			correct: false
		}, {
			id: chance.guid(),
			label: chance.word(),
			correct: false
		}, {
			id: chance.guid(),
			label: chance.word(),
			correct: false
		}]
	}
});