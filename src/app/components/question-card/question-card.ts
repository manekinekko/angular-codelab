import {Component, ViewEncapsulation, Input, Output, EventEmitter, AfterViewInit} from 'angular2/core';

import {IQuestion, IChoice} from '../../services/question-store/question-store';
import {MarkPipe} from '../../pipes/mark-pipe/mark-pipe';
import {StatusDirective} from '../../directives/status-directive/status-directive';

@Component({
  selector: 'question-card',
  styles: [`
		:host {margin: 1px;}
		.mdl-menu {z-index: 0;}
		.mdl-switch__label {display: inline-block; width: 100%; height: 40px;}
		.answer {display: inline-block; width: 20px; height: 20px; position: relative; right: 33px; top: -1px;}
	`],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/components/question-card/question-card.html',
  directives: [StatusDirective],
  pipes: [MarkPipe]
})
export class QuestionCard implements AfterViewInit {

  @Input() question: IQuestion;
	@Input() preview: boolean;
	@Output() checked: EventEmitter<IChoice>;

	constructor() {
		this.checked = new EventEmitter();
	}

	onCheckedChange($event, choice: IChoice) {
		this.checked.emit(choice);
	}

  ngAfterViewInit() {
    console.log(this.question);
  }
}
