import { Chance } from 'chance';

export const THEMES = (() => {
	
	return [{
		"slug": "typescript",
		"title": "TypeScript",
		"logo": "images/typescript.png",
		"description": chance.word()
	}, {
		"slug": "ecma",
		"title": "ECMAScript 6",
		"logo": "images/js.jpg",
		"description": chance.word()
	}, {
		"slug": "ng2",
		"title": "Angular 2",
		"logo": "images/angular2.jpg",
		"description": chance.word()
	}, {
		"slug": "react",
		"title": "React",
		"logo": "images/react.svg",
		"description": chance.word()
	}];
	
})();