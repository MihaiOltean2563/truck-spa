import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef, 
  Renderer2,
  OnInit}from '@angular/core';

@Directive({
  selector: '[animateBurger]'
})
export class AnimateBurgerDirective implements OnInit{

  constructor(private elRef: ElementRef,
  private renderer: Renderer2) { }
  
  ngOnInit(){
    // this.renderer.
  }
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggle() {
    console.log('clicked on a GBK burger');
    this.toggleOpen();
  }
  
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
