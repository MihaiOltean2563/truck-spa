import { Injectable } from '@angular/core';
import { NavigationLink } from '../models/navigation-links.model';

@Injectable()
export class NavigationLinksService {

  constructor() { }

  private navListItems: NavigationLink[] = [
    { icon: 'home', label: 'Home', isActive: true },
    { icon: 'info-circle', label: 'About', isActive: false},
    { icon: 'list-alt', label: 'Services', isActive: false},
    { icon: 'phone', label: 'Contact', isActive: false},
  ];
  
  /*
    new NavigationLink('home','Home', 'true'),
    new NavigationLink('info-circle','About', 'false'),
    new NavigationLink('list-alt','Services', 'false'),
    new NavigationLink('phone','Contact', 'false')
  */ 

  getnavListItems(){
    return this.navListItems;
  }

  


}
