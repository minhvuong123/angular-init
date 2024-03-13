import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // closing the dropdown from anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this._element.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private _element: ElementRef) {

  }
}