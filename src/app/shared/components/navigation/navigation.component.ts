import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, Input, HostListener } from '@angular/core';
import { ComponentItemDirective } from '../../directives/component-item.directive';
import { NavigationItemDirective } from '../../directives/navigation-item.directive';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  @Input() activeComponent: number;
  public currentComponent: number = 0;
  private isActiveC: boolean;

  private navListItems = [
    { icon: 'home', label: 'Home'},
    { icon: 'list-alt', label: 'Services'},
    { icon: 'info-circle', label: 'About'},
    { icon: 'phone', label: 'Contact'},
  ];

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log('navListItems: ', this.navListItems);
  }

  isActive(i){
    return (this.activeComponent === i) ? true : false;
  }

  @HostListener('window:wheel', ['$event']) onWheelScroll(event: any){
    if(event.deltaY > 0){ //scrolling down
      this.next();
    }else{  //scrolling up
      this.prev();
    }
  }

  next(){
    if(this.currentComponent + 1 === this.navListItems.length) return;

    this.currentComponent = (this.currentComponent + 1 ) % this.navListItems.length;
    console.log('currentComponent in nav', this.currentComponent);
  }
  prev(){
    if(this.currentComponent === 0) return;

    this.currentComponent = ((this.currentComponent - 1) + this.navListItems.length) % this.navListItems.length;    
    console.log('currentComponent in nav', this.currentComponent);
  }
  
}
