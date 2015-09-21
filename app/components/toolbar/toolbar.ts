/// <reference path="../../typings/_custom.d.ts" />

import {
  Component, 
  View, 
  bootstrap, 
  ViewEncapsulation, 
  Directive,
  Host,
  SkipSelf,
  ElementRef,
} from 'angular2/angular2';

import {DOM} from 'angular2/src/core/dom/dom_adapter';

import {Home} from '../home/home';


@Directive({
  selector: '[fix-scrolling]',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
class FixScrolling {
  
  private body: HTMLBodyElement;
  
  constructor(private elementRef: ElementRef) {
    this.body = DOM.query('body');
    this.setHeight();
  }
  
  onResize(event: Event) {
    this.setHeight();
  }
  
  private setHeight() {
    let height = this.body.getBoundingClientRect().height;
    DOM.setStyle(this.elementRef.nativeElement, 'height', `${ height }px`);
  }
}

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ Home, FixScrolling ]
})
export class Toolbar {
  title: string = 'Toolbar';
}
