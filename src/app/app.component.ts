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
  EventEmitter,
  OnInit,
  Input,
  ViewEncapsulation
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
import { NavigationLinksService } from "./shared/services/navigation-links.service";
import { NavigationLink } from "./shared/models/navigation-links.model";
import { AnimateBurgerDirective } from "./shared/directives/animate-burger.directive";
import { PartialObserver } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  public currentComponent: number = 0;
  public firstComponentHeight: number;
  private player: AnimationPlayer;
  private timing: string = "700ms ease-in";

  @ViewChildren(ComponentItemDirective, { read: ElementRef })
  public componentList: QueryList<ElementRef>;

  @ViewChild("componentsWrapper", { read: ElementRef}) private componentsWrapper: ElementRef;
  
  public navListItems = [
    { icon: "home", label: "Home", isActive: true },
    { icon: "info-circle", label: "About", isActive: false },
    { icon: "list-alt", label: "Services", isActive: false },
    { icon: "phone", label: "Contact", isActive: false }
  ];



  constructor(
    private builder: AnimationBuilder,
    private navService: NavigationLinksService) {}

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.firstComponentHeight = this.componentList.toArray()[0].nativeElement.offsetHeight;
  }

  isActive(i){
    this.navListItems.map( (item, index) => {
      item.isActive = (i == index) ? true : false;
    });
  }

  listClick(newItem, index) {
    this.isActive(index);
    this.scrollThisIntoView(index);
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
    this.isActive(this.currentComponent);
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
    this.isActive(this.currentComponent);
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


  scrollThisIntoView(index: any) {
    const offset = index * this.firstComponentHeight;
    console.log('go to section from nav: ', index)
    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateY(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.componentsWrapper.nativeElement);
    this.player.play();
  }

}
