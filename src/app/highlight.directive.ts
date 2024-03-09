import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective { // attributes directives
  constructor(private _elementRef: ElementRef) { 
    // console.log("highlight", _elementRef)
    _elementRef.nativeElement.style.color = "red"
   }
}
