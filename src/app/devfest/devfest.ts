import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {APP_ROUTES} from '../routes.config'
import {Toolbar} from '../component/toolbar/toolbar'
import {QuestionsStore} from '../services/QuestionsStore'
@Component({
  selector: 'devfest',
  providers: [QuestionsStore],
  template: '<toolbar></toolbar>',
  directives: [Toolbar],
  pipes: []
})
@RouteConfig(APP_ROUTES)
export class Devfest {
  
}
