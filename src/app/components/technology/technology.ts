/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';

import { QuestionCard } from './question-card/question-card';
import { IQuestion, QuestionsStore } from '../../services/QuestionsStore';

@Component({
  providers: [QuestionsStore],
  selector: 'technology',
  templateUrl: './components/technology/technology.html',
  directives: [NgFor, QuestionCard]
})
export class Technology {
  
  private questionCards: IQuestion[] = [];
  
  constructor(questionsStore: QuestionsStore, params: RouteParams) {
    questionsStore.fetch(params.get('name')).then((questions) => {
      this.questionCards = questions;
    });
  }
}