import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit { // attributes directives
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";
  @Input('highlight') highlight: string = "blue";
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) { 
    // console.log("highlight", _elementRef)
    // _elementRef.nativeElement.style.color = "red";
    // renderer.setStyle(_elementRef.nativeElement, "color", "green");
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this._elementRef.nativeElement, "background-color", "green");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouselease(eventData: Event) {
    // this.renderer.setStyle(this._elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  }
}
