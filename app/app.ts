/// <reference path="typings/_custom.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

import {Toolbar} from './components/toolbar/toolbar';

@Component({
  selector: 'devfest'
})
@View({
  template: `
    <toolbar></toolbar>
  ` ,
  directives: [ Toolbar ]
})
export class Devfest {
	//...
}