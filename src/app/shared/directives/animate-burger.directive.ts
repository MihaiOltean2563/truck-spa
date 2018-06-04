import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef }from '@angular/core';

@Directive({
  selector: '[animateBurger]'
})
export class AnimateBurgerDirective{

  constructor(private elRef: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggle() {
    console.log('clicked');
    this.toggleOpen();
  }
  
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
