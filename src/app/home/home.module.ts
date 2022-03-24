import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PaginatorModule } from "src/app/small-features/paginator/paginator.module";
import { CharacterSummaryComponent } from './components/character-summary/character-summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterSummaryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginatorModule
  ]
})
export class HomeModule { }
