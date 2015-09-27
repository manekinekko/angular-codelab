import { Chance } from 'chance';

export class ThemesDataService {
	list(){
		return [{
			title: 'TypeScript',
			logo: 'images/typescript.png',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			title: 'JavaScript',
			logo: 'images/js.jpg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			title: 'Angular 2',
			logo: 'images/angular2.jpg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			title: 'React',
			logo: 'images/react.svg',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}]
	}
}

export class QuestionDataService {
	list(){
		return Array.apply(null, {length: 5}).map((item, index) => {
			return {
				title: `Question #${index+1} : `,
				choices: [{
					label: 'response A'
				}, {
					label: 'response B'
				}, {
					label: 'response C'
				}, {
					label: 'response D'
				}]
			}
		});
	}
}