import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HttpClientService} from "./shared/services/http-client.service";
import {SearchService} from "./modules/onboarding/services/search.service";
import { HttpClientModule } from '@angular/common/http';
import {APP_ROUTES} from "./shared/constants/app-routes";

const appRoutes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: APP_ROUTES.search, loadChildren: './modules/onboarding/onboarding.module#OnboardingModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules}),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    SearchService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
