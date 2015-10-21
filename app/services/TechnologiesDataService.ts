import { Chance } from 'chance';

export interface ITechnology {
	slug: string;
	title: string;
	logo: string;
	description: string;
}

export class ThemesDataService {
	list(): ITechnology[] {
		return [{
			slug: 'typescript',
			title: 'TypeScript',
			logo: 'images/typescript.png',
			description: 'lorem lorem lorem lorem lorem lorem loremloremloremlorem'
		}, {
			slug: 'javascript',
			title: 'JavaScript',
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
