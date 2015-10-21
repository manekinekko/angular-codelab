import { Chance } from 'chance';

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