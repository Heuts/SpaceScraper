import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstronautOverviewComponent } from './components/astronaut-overview/astronaut-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NasaCarousel } from './components/nasa-carousel/nasa-carousel.component';
import { DatePipe } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { MaterialModule } from 'src/app/material.module';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    AstronautOverviewComponent,
    NavBarComponent,
    NasaCarousel,
    IntroductionComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DatePipe, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
