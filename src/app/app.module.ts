import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';

//Custom Components
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

//Custom Directives
import { ComponentItemDirective } from './shared/directives/component-item.directive';
import { AnimateBurgerDirective } from './shared/directives/animate-burger.directive';

//Custom Services
import { WindowObjReferenceService } from './shared/services/window-obj-reference.service';
import { NavigationLinksService } from './shared/services/navigation-links.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ComponentItemDirective,
    AnimateBurgerDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [WindowObjReferenceService, NavigationLinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
