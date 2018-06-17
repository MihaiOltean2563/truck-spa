import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';

//Custom Components
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { ContactComponent } from './shared/components/contact/contact.component';

//Custom Directives
import { ComponentItemDirective } from './shared/directives/component-item.directive';
import { AnimateBurgerDirective } from './shared/directives/animate-burger.directive';

//Custom Services
import { WindowObjReferenceService } from './shared/services/window-obj-reference.service';
import { NavigationLinksService } from './shared/services/navigation-links.service';

//HammerJS for touch gestures
import * as Hammer from 'hammerjs';
import { RouterModule, Routes } from '@angular/router';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}
const appRoutes: Routes = [
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ComponentItemDirective,
    AnimateBurgerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WindowObjReferenceService, NavigationLinksService, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
