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
  @Input('statusPreview') preview: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngAfterViewInit() {
    if(this.preview){
      let color = this.status ? 'green' : 'red';
      this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
  }

}
