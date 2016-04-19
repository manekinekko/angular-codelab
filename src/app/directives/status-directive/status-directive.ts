import {
  Directive,
  ElementRef,
  Renderer,
  Input,
  AfterViewInit
} from 'angular2/core';

@Directive({
  selector: '[status]'
})
export class StatusDirective implements AfterViewInit {

  @Input('status') status: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngAfterViewInit() {
    let color = this.status ? 'green' : 'red';
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

}
