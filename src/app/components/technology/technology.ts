import {Component, ViewEncapsulation, AfterViewInit } from 'angular2/core';
import { Router, RouteParams, Location } from 'angular2/router';

import { QuestionCard } from '../question-card/question-card';
import { IQuestion, IChoice, Question, QuestionsStore, QUESTION } from '../../services/question-store/question-store';

@Component({
  selector: 'technology',
  styles: [`
    .mdl-card__actions {width: 510px;margin: 0 auto;}
    .mdl-align__left {float: left;}
    .mdl-align__right {float: right}
  `],
  template: `
    <question-card (checked)="toggle($event)" [preview]="false" [question]="currentQuestion" class="mdl-cell mdl-cell--4-col" ></question-card>
    <div class="mdl-card__actions mdl-card--border">
      <a  *ngIf="! isFirstQuestion === true"
          (click)="previousQuestionClick()"
          class="mdl-button mdl-align__left mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Previous Question
      </a>
      <a  *ngIf="! isLastQuestion === true"
          (click)="nextQuestionClick()"
          class="mdl-button mdl-align__right mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Next Question
      </a>
      <a  *ngIf="isLastQuestion === true"
          (click)="save()"
          class="mdl-button mdl-align__right mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Finish
      </a>
    </div>
  `,
  directives: [QuestionCard],
  encapsulation: ViewEncapsulation.None
})
export class Technology implements AfterViewInit {

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

  //DI in Typescript (prefered)
  //*/
  constructor(
    questionsStore: QuestionsStore,
    params: RouteParams,
    location: Location,
    router: Router) {
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

  ngAfterViewInit() {

    this.fetchData();

  }

  /**
   * Get the data from the Question Store
   */
  private fetchData() {
    this.questionsStore
      .fetch()
      .then((questions: IQuestion[]) => {

        // initialize the local questions collection
        this.questions = questions.map((question: IQuestion) => new Question(question));

        return this.questions;
      })
      .then((questions: IQuestion[]) => {

        // initialize the current question
        this.currentQuestion = questions[this.currentQuestionId];
      })
      .then(() => {

        // update the current URL path according to the current question
        this.updateUrl(this.currentQuestion)
      });
  }

  /**
   * Toggles the state of a Choice
   * @param  {IChoice} choice A choice instance
   */
  private toggle(choice: IChoice) {
    this.questions[this.currentQuestionId].toggle(choice);
  }

  /**
   * Navigate to the next question
   */
  private nextQuestionClick() {
    this.navigateToQuestion(QUESTION.NEXT);
  }

  /**
   * Navigate to the previous question
   */
  private previousQuestionClick() {
    this.navigateToQuestion(QUESTION.PREVIOUS);
  }

  /**
   * Navigate to a given question
   * @param  {QUESTION} nextOrPrevious The QUESTION enum
   */
  private navigateToQuestion(nextOrPrevious: QUESTION) {
    if (this.questions.length > 0) {
      this.setCurrentQuestion(nextOrPrevious);
      this.setFirstLast();
      this.updateUrl(this.currentQuestion);
    }
  }

  /**
   * Save the current quiz and navigate to the summary
   */
  private save() {
    this.questionsStore.save(this.questions);
    try {
      this.router.navigate(['/Summary']);
    }
    catch(e){
      console.error('The route /Summary is not yet implemented');
    }
  }

  /**
   * Initialize the first and the last flags to track the navigation process
   */
  private setFirstLast() {
    this.isFirstQuestion = (this.currentQuestionId === 0);
    this.isLastQuestion = (this.currentQuestionId === this.questions.length - 1);
  }

  /**
   * Set the current question instance and its ID
   * @param  {QUESTION} nextOrPrevious The QUESTION enum
   */
  private setCurrentQuestion(nextOrPrevious: QUESTION) {
    this.currentQuestionId = this.computeCurrentQuestionId(this.currentQuestionId, nextOrPrevious);
    this.currentQuestion = this.questions[this.currentQuestionId];
  }

  /**
   * update url (does not reload the page)
   * @param  {IQuestion} question The question instance used to update the URL
   */
  private updateUrl(question: IQuestion) {
    let path = this
      .router
      .generate(['/Technology', { name: this.params.get('name'), id: question.id }])
      .component
      .urlPath;

    this.location.go(path);
  }

  /**
   * Figure out the what the current question index should be depending on which
   * way we are navigate
   * @param  {number}   currentId      the current question id before the navigation happens
   * @param  {QUESTION} nextOrPrevious the QUESTION enum
   * @return {number}                  the computed question id after the navigation
   */
  private computeCurrentQuestionId(currentId: number, nextOrPrevious: QUESTION): number {
    let currentQuestionId = currentId;
    if (nextOrPrevious === QUESTION.NEXT) {
      if ((currentQuestionId + 1) < this.questions.length) {
        currentQuestionId += 1;
      }
    }
    else if (nextOrPrevious === QUESTION.PREVIOUS) {
      if ((currentQuestionId - 1) >= 0) {
        currentQuestionId -= 1;
      }
    }
    return currentQuestionId;
  }

}
