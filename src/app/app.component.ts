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
  private timing: string = "700ms ease-in";
  private actualWindowObj;
  @ViewChildren(ComponentItemDirective, { read: ElementRef })
  public componentList: QueryList<ElementRef>;
  @ViewChild("componentsWrapper") private componentsWrapper: ElementRef;


  constructor(
    private builder: AnimationBuilder,
    private winRef: WindowObjReferenceService
  ) {
    // getting the native window obj
    this.actualWindowObj = winRef.nativeWindow;
  }

  ngAfterViewInit() {
    this.firstComponentHeight = this.componentList.toArray()[0].nativeElement.offsetHeight;
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

  scrollThisIntoView(index: number) {
    const offset = index * this.firstComponentHeight;
    
    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }

}
