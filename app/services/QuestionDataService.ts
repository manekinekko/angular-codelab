import { chance } from 'chance/chance';

interface IQuestionModel {
	description: string;
	choices: {
		label: string,
		selected: boolean,
		isValid: boolean
	}[]
}

export class QuestionDataService {
	private range: IQuestionModel[];
	list(){
		
		return Array.apply(null, {length: 100}).map((item, index) => {
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