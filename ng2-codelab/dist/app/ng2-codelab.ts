import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {APP_ROUTES} from './routes.config'
import {Toolbar} from './components/toolbar/toolbar'
import {QuestionsStore} from './services/question-store/question-store'

@Component({
  selector: 'devfest',
  providers: [QuestionsStore],
  template: '<toolbar></toolbar>',
  directives: [Toolbar],
  pipes: []
})
@RouteConfig(APP_ROUTES)
export class Ng2CodelabApp {

}
