import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
  Input,
  HostListener,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2
} from "@angular/core";
import { ComponentItemDirective } from "../../directives/component-item.directive";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor(
    private renderer: Renderer2) {}

  @Input() activeComponent: number;

  public currentComponent: number = 0;

  
  @Output()
  scrollThisElemIntoView: EventEmitter<number> = new EventEmitter<number>();

  
  private navListItems = [
    { icon: "home", label: "Home" },
    { icon: "info-circle", label: "About" },
    { icon: "list-alt", label: "Services" },
    { icon: "phone", label: "Contact" }
  ];
  private selectedItem = this.navListItems[0];

  ngOnInit() {}
 
  listClick(event, newValue, index) {
    this.selectedItem = newValue || index;  // don't forget to update the model here
    this.scrollThisElemIntoView.emit(index);
    console.log('new selectedItem', this.selectedItem);
  }
}
