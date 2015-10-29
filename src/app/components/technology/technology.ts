/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgIf, Inject, ViewEncapsulation } from 'angular2/angular2';
import { Router, RouteParams, RouterLink, Location } from 'angular2/router';

import { QuestionCard } from './question-card/question-card';
import { IQuestion, Question, QuestionsStore } from '../../services/QuestionsStore';

enum QUESTION {
  NEXT, PREVIOUS
};

@Component({
  selector: 'technology',
  styles: [
    '.mdl-card__actions {width: 320px;margin: 0 auto;}',
    '.mdl-align__left {float: left;}',
    '.mdl-align__right {float: right;}'
  ],
  template:`
    <question-card [question]="currentQuestion" class="mdl-cell mdl-cell--4-col" ></question-card>
    
    <div class="mdl-card__actions mdl-card--border">
      <a  *ng-if="! isFirstQuestion === true" 
          (click)="previousQuestionClick()" 
          class="mdl-button mdl-align__left mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Previous Question
      </a>
      <a  *ng-if="! isLastQuestion === true" 
          (click)="nextQuestionClick()" 
          class="mdl-button mdl-align__right mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Next Question
      </a>
      <a  *ng-if="isLastQuestion === true" 
          [router-link]="['/Summary']" 
          class="mdl-button mdl-align__right mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Finish
      </a>
    </div>
  `,
  directives: [QuestionCard, NgIf, RouterLink],
  encapsulation: ViewEncapsulation.None
})
export class Technology {
  
  private questionsStore: QuestionsStore;
  private questions: IQuestion[];
  private currentQuestion: IQuestion;
  private currentQuestionId: number = 0;
  private params: RouteParams;
  private router: Router;
  private location: Location;
  private isFirstQuestion: boolean;
  private isLastQuestion: boolean;
  
  // DI in pure ES6
  /*/
  constructor(
    @Inject(QuestionsStore) questionsStore, 
    @Inject(RouteParams) params, 
    @Inject(Location) location, 
    @Inject(Router) router) 
  {
  /**/
  
  //DI in Typescript
  //*/ 
  constructor(
    questionsStore: QuestionsStore, 
    params: RouteParams, 
    location: Location, 
    router: Router) 
  {
  /**/
  
    this.questionsStore = questionsStore;
    this.params = params;
    this.location = location;
    this.router = router;
    
    // defaults
    this.questions = [];
    this.currentQuestionId = 0;
    this.currentQuestion = null;
    this.isFirstQuestion = true;
    this.isLastQuestion = false;
    
  }
  
  public onInit() {
    
    this.currentQuestionId = 0;
    
    // fetch data
    this.questionsStore
      .fetch(/*this.params.get('id')*/)
      .then( (questions: IQuestion[]) => {
        this.questions = questions;
        return questions;
      })
      .then( (questions: IQuestion[]) => {
        this.questions = this.questions.map( (question: IQuestion) => new Question(question)); 
        return this.questions; 
      })
      .then( (questions: IQuestion[]) => {
        this.currentQuestion = questions[ this.currentQuestionId ];
      })
      .then(() => this.updateUrl(this.currentQuestion));
  }
  
  private nextQuestionClick() {
    console.log('Technology.nextQuestion()');
    this.navigateToQuestion(QUESTION.NEXT);
  }
  
  private previousQuestionClick() {
    console.log('Technology.previousQuestion()');
    this.navigateToQuestion(QUESTION.PREVIOUS);
  }
  
  private navigateToQuestion(where: QUESTION) {
    if(this.questions.length > 0){
      
      this.currentQuestionId = this.computeCurrentQuestionId(this.currentQuestionId, where);
      
      this.currentQuestion = this.questions[ this.currentQuestionId ];
      
      this.isFirstQuestion = (this.currentQuestionId === 0);
      this.isLastQuestion = (this.currentQuestionId === this.questions.length-1);
      
      this.updateUrl(this.currentQuestion);
    }
  }
  
  // update url (does not reload the page)
  private updateUrl(question: IQuestion) {
    this.location.go(`/technology/${this.params.get('name')}/${question.id}`);
  }
  
  private computeCurrentQuestionId(currentId: number, where: QUESTION) {
    let currentQuestionId = currentId;
    if(where === QUESTION.NEXT) {
      if((currentQuestionId + 1) < this.questions.length) {
        currentQuestionId += 1;
      }
    }
    else if (where === QUESTION.PREVIOUS) {
      if((currentQuestionId - 1) >= 0) {
        currentQuestionId -= 1;
      }
    }
    return currentQuestionId;
  }
  
}