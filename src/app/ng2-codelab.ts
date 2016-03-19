import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {QuestionsStore} from './services/question-store/question-store';
import {QuestionCard} from './components/question-card/question-card';
import {Technology} from './components/technology/technology';
import {Summary} from './components/summary/summary';

@Component({
  selector: 'app',
  templateUrl: 'app/ng2codelab.html',
  providers: [QuestionsStore],
  directives : [Home, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    component: Home,
    name: 'Home',
    useAsDefault: true
  },
	{
		path: '/question',
		component: QuestionCard,
		name: 'QuestionCard'
	},
	{
		path: '/technology/:name/:id',
		component: Technology,
		name: 'Technology'
	},
	{
		path: '/summary',
		component: Summary,
		name: 'Summary'
	}
])
export class Ng2CodelabApp {
  private title: string;

  constructor() {
    this.title = 'Angular 2 Quiz App';
  }

}
