import { Component, ContentChildren, QueryList, AfterViewInit, ViewChildren, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ComponentItemDirective } from './shared/directives/component-item.directive';
import { AnimationBuilder, AnimationFactory, animate, style, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public currentComponent: number = 0;
  public firstComponentHeight: number;
  private player: AnimationPlayer;
  private timing: string = '500ms ease-in';

  @ViewChildren(ComponentItemDirective, {read: ElementRef}) private componentList: QueryList<ElementRef>;
  @ViewChild('componentsWrapper') private componentsWrapper : ElementRef;

  constructor(private builder : AnimationBuilder){}

  ngAfterViewInit(){
    console.log('component list: ', this.componentList);
    console.log('First Component', this.componentList.first.nativeElement.childNodes[0]);
    this.firstComponentHeight = this.componentList.first.nativeElement.childNodes[0].offsetHeight;
    console.log('componentsWrapper', this.componentsWrapper);
  }

  next(){
    if(this.currentComponent + 1 === this.componentList.length) return;

    this.currentComponent = (this.currentComponent + 1 ) % this.componentList.length;
    console.log('currentComponent', this.currentComponent);
    const offset = this.currentComponent * this.firstComponentHeight;
    
    const myAnimation : AnimationFactory = this.builder.build(
      [
        animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
      ]
    );

    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }
  prev(){
    if(this.currentComponent === 0) return;

    this.currentComponent = ((this.currentComponent - 1) + this.componentList.length) % this.componentList.length;    
    console.log('currentSlide', this.currentComponent);
    const offset = this.currentComponent * this.firstComponentHeight;
    
    const myAnimation : AnimationFactory = this.builder.build(
      [
        animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
      ]
    );

    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }

  @HostListener('window:wheel', ['$event']) onWheelScroll(event: any){
    if(event.deltaY > 0){ //scrolling down
      this.next();
    }else{  //scrolling up
      this.prev();
    }
  }

}
