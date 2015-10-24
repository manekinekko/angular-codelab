/// <reference path="../typings/_custom.d.ts" />

import { Injectable } from 'angular2/core';

export interface ITechnology {
	slug: string;
	title: string;
	logo: string;
	description: string;
}

@Injectable()
export class TechnologiesStore {
	fetch(): ITechnology[] {
		return [{
			slug: 'typescript',
			title: 'TypeScript',
			logo: 'images/typescript.png',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			slug: 'ecma',
			title: 'ECMAScript 6',
			logo: 'images/js.jpg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			slug: 'ng2',
			title: 'Angular 2',
			logo: 'images/angular2.jpg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			slug: 'react',
			title: 'React',
			logo: 'images/react.svg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}]
	}
}
