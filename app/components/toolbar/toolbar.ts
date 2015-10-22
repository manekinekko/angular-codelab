/// <reference path="../../typings/_custom.d.ts" />

import { Component } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Home } from '../home/home';
import { FixScrolling } from './fix-scrolling';

@Component({
  selector: 'toolbar',
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ ROUTER_DIRECTIVES, Home, FixScrolling ]  
})
export class Toolbar {
  
  title: string = 'Toolbar';
  
  constructor(){
    
  }
}
