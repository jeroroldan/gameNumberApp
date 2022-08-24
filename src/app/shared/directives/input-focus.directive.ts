import { Directive, forwardRef, Attribute, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
 selector: '[customFocus]'
})
export class InputFocusDirective implements AfterViewInit {

   constructor(
        private elementRef: ElementRef
    ){}
  
    ngAfterViewInit(){
        Promise.resolve().then(() => this.elementRef.nativeElement.focus());
    }
}


