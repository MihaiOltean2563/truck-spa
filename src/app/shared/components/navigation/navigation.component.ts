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
  Renderer2,
  OnChanges
} from "@angular/core";
import { ComponentItemDirective } from "../../directives/component-item.directive";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent {
  constructor(
    private renderer: Renderer2) {
      
    }

    public currentComponent: number = 0;

    @Input() set actComp(index: number){
      this.isActive(index);
    };


  @Output()
  scrollThisElemIntoView: EventEmitter<any> = new EventEmitter<any>();

  
  private navListItems = [
    { icon: "home", label: "Home", isActive: true },
    { icon: "info-circle", label: "About", isActive: false },
    { icon: "list-alt", label: "Services", isActive: false },
    { icon: "phone", label: "Contact", isActive: false }
  ];

  
  private selectedItem = 0;

  isActive(i){
    this.navListItems[this.selectedItem].isActive = false; //reset
    this.navListItems[i].isActive = true;
    this.selectedItem = i;
  }
  
  listClick(newItem, index) {
    this.isActive(index);

    this.scrollThisElemIntoView.emit({index: index, selectedItem: this.selectedItem});
    console.log('new selectedItem', this.selectedItem);
  }
}
