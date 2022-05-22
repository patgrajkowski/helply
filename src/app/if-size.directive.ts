import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ifSize]',
})
export class IfSizeDirective implements OnInit, OnChanges {
  @Input()
  ifSize: string = '';

  isMobile: boolean = false;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.checkSize();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkSize();
    console.log(this.isMobile);
  }
  checkSize = (): void => {
    window.onresize = () => (this.isMobile = window.innerWidth <= 991);
  };
}
