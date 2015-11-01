import { Pipe } from 'angular2/angular2';
import { IChoice } from '../../../services/QuestionsStore';

@Pipe({
	name: 'mark',
	pure: false
})
export class  Mark {
	transform(choice: IChoice) {
		return choice.correct === choice.checked ? '✔' : '✘';
	}
}