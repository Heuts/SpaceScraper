import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaCarousel } from './components/nasa-carousel/nasa-carousel.component';
import { AstronautOverviewComponent } from './components/astronaut-overview/astronaut-overview.component';
import { IntroductionComponent } from './components/introduction/introduction.component';


const routes: Routes = [
  {
    path: "nasa-carousel",
    component: NasaCarousel,
    pathMatch: "full"
  },
  {
    path: "astronaut-overview",
    component: AstronautOverviewComponent,
    pathMatch: "full"
  },
  {
    path: "introduction",
    component: IntroductionComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
