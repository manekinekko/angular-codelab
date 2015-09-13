/// <reference path="typings/_custom.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
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
class Devfest {}

bootstrap(Devfest, []);