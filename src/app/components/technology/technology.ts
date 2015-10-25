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
  
  private questionsStore: QuestionsStore;
  private questionCards: IQuestion[];
  private currentQuestion: IQuestion;
  private currentQuestionId: number = 0;
  private params: RouteParams;
  
  constructor(questionsStore: QuestionsStore, params: RouteParams) {
    this.questionsStore = questionsStore;
    this.params = params;
  }
  
  onInit() {
    this.questionsStore.fetch(this.params.get('name')).then((questions) => {
      
      this.currentQuestionId = +this.params.get('id')-1;
      
      if( ! questions[ this.currentQuestionId ]){
        this.currentQuestionId = 0;
      }

      this.currentQuestion = questions[ this.currentQuestionId ];
      this.questionCards = questions;
    });
  }
  
  nextQuestion() {
    this.currentQuestionId++;
    console.log(this.currentQuestionId);
  }
  
}