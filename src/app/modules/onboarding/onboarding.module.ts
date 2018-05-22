import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchService} from "./services/search.service";
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, DetailsComponent],
  providers: [SearchService]
})
export class OnboardingModule { }
