import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstronautOverviewComponent } from './components/astronaut-overview/astronaut-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule, AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NasaCarousel } from './components/nasa-carousel/nasa-carousel.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AstronautOverviewComponent,
    NavBarComponent,
    NasaCarousel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
