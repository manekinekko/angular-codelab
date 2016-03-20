import {
  Directive,
  ElementRef,
  Renderer,
  Input,
  AfterViewInit
} from 'angular2/core';

export class StatusDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngAfterViewInit() {

  }

}
