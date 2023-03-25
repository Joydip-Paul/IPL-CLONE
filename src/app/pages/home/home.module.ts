import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureVideoComponent } from './components/feature-video/feature-video.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FeatureVideoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
