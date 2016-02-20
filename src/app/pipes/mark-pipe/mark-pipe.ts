import { Pipe } from 'angular2/core';
import { IChoice } from '../../services/question-store/question-store';

@Pipe({
	name: 'mark'
})
export class  MarkPipe {
	transform(choice: IChoice) {
		return choice.isCorrect() ? '✔' : '✘';
	}
}
