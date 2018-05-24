import {
  Component,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  HostListener,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { ComponentItemDirective } from "./shared/directives/component-item.directive";
import {
  AnimationBuilder,
  AnimationFactory,
  animate,
  style,
  AnimationPlayer
} from "@angular/animations";
import { WindowObjReferenceService } from "./shared/services/window-obj-reference.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  public currentComponent: number = 0;
  public firstComponentHeight: number;
  private player: AnimationPlayer;
  private timing: string = "500ms ease-in";
  private actualWindowObj;
  @ViewChildren(ComponentItemDirective, { read: ElementRef })
  public componentList: QueryList<ElementRef>;
  @ViewChild("componentsWrapper") private componentsWrapper: ElementRef;


  constructor(
    private builder: AnimationBuilder,
    private winRef: WindowObjReferenceService
  ) {
    // getting the native window obj
    console.log("Native window obj", winRef.nativeWindow);
    this.actualWindowObj = winRef.nativeWindow;
  }

  ngAfterViewInit() {
    // this.firstComponentHeight = this.componentList.first.nativeElement.childNodes[0].offsetHeight;
    this.firstComponentHeight = this.componentList.toArray()[0].nativeElement.offsetHeight;
    console.log('firstComponentHeight', this.firstComponentHeight)
    console.log('componentList', this.componentList.toArray());
  }

  // isInView(elem) {
  //   var bounding = elem.getBoundingClientRect();
  //   return (
  //       bounding.top >= 0 &&
  //       bounding.left >= 0 &&
  //       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // };
  isInView(){

  }

  next() {
    if (this.currentComponent + 1 === this.componentList.length) return;

    this.currentComponent =
      (this.currentComponent + 1) % this.componentList.length;
    console.log("currentComponent", this.currentComponent);
    const offset = this.currentComponent * this.firstComponentHeight;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
    ]);
   
    
    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }
  prev() {
    if (this.currentComponent === 0) return;

    this.currentComponent =
      (this.currentComponent - 1 + this.componentList.length) %
      this.componentList.length;
    console.log("currentComponent", this.currentComponent);
    const offset = this.currentComponent * this.firstComponentHeight;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }

  @HostListener("window:wheel", ["$event"])
  onWheelScroll(event: any) {
    if (event.deltaY > 0) {
      //scrolling down
      this.next();
    } else {
      //scrolling up
      this.prev();
    }
  }

  scrollThisIntoView(sectionToScrollTo) {
    console.log("scrollThisIntoView triggered!");
    // console.log('app comp got ',sectionToScrollTo);

    let found = this.componentList.find(item => {
      return (
        item.nativeElement.nodeName.toLowerCase() ===
        sectionToScrollTo.toLowerCase()
      );
    });
    console.log("found", found);
    // const offset = this.currentComponent * this.firstComponentHeight;
    // const myAnimation: AnimationFactory = this.builder.build([
    //   animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
    // ]);

    // this.player = myAnimation.create(found.nativeElement);
    // this.player.play();
    // console.log("window", this.winRef.nativeWindow);

    // // found.nativeElement.scrollIntoViewIfNeeded();
    // let positionObj = this.getPosition(found.nativeElement.children[0]);
    // // console.log("posObj", positionObj);

    // this.winRef.nativeWindow.scrollTo(0, 200);
    /* options obj: 
    { 
      behavior: "smooth", 
      block: "start", 
      inline:'nearest' 
    }
    */
  }

  getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
    console.log("x", xPosition);
    console.log("y", yPosition);
    return { x: xPosition, y: yPosition };
  }
}
