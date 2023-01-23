import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.elemnt.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elemnt.nativeElement.style.background = '';
  }

  constructor(private elemnt: ElementRef) { 
    //this.elemnt.nativeElement.style.background = 'red';
  }

}
