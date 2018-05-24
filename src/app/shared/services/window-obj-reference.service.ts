import { Injectable } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  // console.log('window', window);
  return window;
}

@Injectable()
export class WindowObjReferenceService {

  constructor() { }
  
  get nativeWindow() : any {
    return _window();
 }

}
