import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {QuestionCard} from './components/question-card/question-card';

@Component({
  selector: 'app',
  templateUrl: 'app/ng2codelab.html',
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
	}
])
export class Ng2CodelabApp {
  private title: string;

  constructor() {
    this.title = 'Angular 2 Quiz App';
  }

}
