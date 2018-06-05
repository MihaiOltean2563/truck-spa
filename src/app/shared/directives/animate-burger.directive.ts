import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  EventEmitter,
  Inject
  }from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[animateBurger]'
})
export class AnimateBurgerDirective{

  constructor(
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }

  @HostBinding('class.show') isOpen = false;
  
  @HostListener('click') toggle() {
    this.toggleOpen();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.document.body.classList[this.isOpen ? 'add' : 'remove']('show');
  }

}
