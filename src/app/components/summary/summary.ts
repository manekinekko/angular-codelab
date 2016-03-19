import {Component, ViewEncapsulation, Provider, OnInit} from 'angular2/core';
import {QuestionsStore, IQuestionsStore, IQuestion, IChoice} from '../../services/question-store/question-store';
import {QuestionCard} from '../question-card/question-card';
import {SessionStore} from '../../services/session-store/session-store';

@Component({
	providers: [
		new Provider(QuestionsStore, {
			useFactory: () => new QuestionsStore(SessionStore.read())
		})
	],
	selector: 'summary',
	template: `
		<div>
			<div class="mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
				<div class="mdl-card__supporting-text">
					<h4>Your score is {{ score }}/{{ total }}</h4>
				</div>
			</div>
		</div>
		<question-card [preview]="true" [question]="question" *ngFor="#question of questions"></question-card>
	`,
	directives: [QuestionCard],
	encapsulation: ViewEncapsulation.None
})
export class Summary implements OnInit{

	private questions: IQuestion[];
	private score: number;
	private total: number;
	private questionsStore: IQuestionsStore;

	constructor(questionsStore: QuestionsStore) {
		this.questionsStore = questionsStore;
		this.questionsStore
			.fetch()
			.then( (questions) => this.questions = questions );
	}

	ngOnInit() {
		this.total = this.questions.length;
		this.score = this.questionsStore.computeResult(this.questions);
	}
}
