import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {
  constructor(elem: ElementRef, renderer: Renderer2) {
    // elem.nativeElement.style.textDecoration = 'underline';
    renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline')
   }
}
