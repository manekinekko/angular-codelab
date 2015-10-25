/// <reference path="../../typings/_custom.d.ts" />

import { Component, EventEmitter } from 'angular2/angular2';
import { RouterOutlet, RouterLink } from 'angular2/router';

import { Home } from '../home/home';
import { FixScrolling } from './fix-scrolling';

@Component({
  selector: 'toolbar',
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ RouterOutlet, RouterLink, Home, FixScrolling ]  
})
export class Toolbar {
  private title: string = 'Angular 2 Quiz App';
  private em: EventEmitter = new EventEmitter();
  
  updateTitle(newTitle: string) {
    this.em.next(newTitle);
  }
}
