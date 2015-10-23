/// <reference path="typings/_custom.d.ts" />

import { Component } from 'angular2/angular2';
import { RouteConfig, Router } from 'angular2/router';

import { Toolbar } from './components/toolbar/toolbar';
import { APP_ROUTES } from './routes.config';

@Component({
  selector: 'devfest',
  template: '<toolbar></toolbar>' ,
  directives: [ Toolbar ]
})
@RouteConfig(APP_ROUTES)
export class Devfest {
  constructor(router: Router) {
    router.navigate(['/Home']);
  }
}