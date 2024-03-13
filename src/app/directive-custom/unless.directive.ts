import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective { // structure Directive
  constructor(
    private templateRef: TemplateRef<unknown>, 
    private viewContainer: ViewContainerRef,
    private _elementRef: ElementRef
  ) { 
    console.log("templateRef", templateRef)
    console.log("viewContainer", viewContainer)
    console.log("ElementRef", _elementRef)
  }

  @Input() 
  public set unless(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }
}
