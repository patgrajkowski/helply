import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[ifSize]',
})
export class IfSizeDirective implements OnInit {
  @Input()
  ifSize: string = '';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkSize();
  }

  isMobile: boolean = false;
  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.checkSize();
  }

  private checkSize(): void {
    //   element shows on mobile
    this.ifSize === 'S' &&
      window.innerWidth > 991 &&
      this.viewContainer.length === 1 &&
      this.viewContainer.clear();
    this.ifSize === 'S' &&
      window.innerWidth < 991 &&
      this.viewContainer.length < 1 &&
      this.viewContainer.createEmbeddedView(this.templateRef);

    // element shows on desktop

    this.ifSize === 'L' &&
      window.innerWidth <= 991 &&
      this.viewContainer.length === 1 &&
      this.viewContainer.clear();
    this.ifSize === 'L' &&
      window.innerWidth >= 991 &&
      this.viewContainer.length < 1 &&
      this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
