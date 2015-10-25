/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';
import { Router, RouteParams } from 'angular2/router';

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
  private router: Router;
  
  constructor(questionsStore: QuestionsStore, params: RouteParams, router: Router) {
    this.questionsStore = questionsStore;
    this.params = params;
    this.router = router;
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
    if(this.questionCards){
      this.currentQuestion = this.questionCards[ this.currentQuestionId++ ];
      console.log(this.currentQuestion);
      
      //this.router.navigate([`/technonoly/${this.params.get('name')}/${this.currentQuestionId}`]);
    }
  }
  
}