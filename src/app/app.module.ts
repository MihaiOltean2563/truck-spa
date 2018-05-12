import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CarouselItemDirective } from './shared/directives/carousel-item.directive';
import { CarouselItemElementDirective } from './shared/directives/carousel-item-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
