import {
  Directive,
  Host,
  SkipSelf,
  ElementRef,
  Renderer
} from 'angular2/core';

@Directive({
  selector: '[fix-scrolling]',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class FixScrolling {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    this.setHeight();
  }

  onResize(event: Event) {
    this.setHeight();
  }

  private setHeight() {
    let height = '100';
    this.renderer.setElementStyle(this.el.nativeElement, 'height', `${ height }%`);
  }
}
