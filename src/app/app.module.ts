import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppFilterBoxComponent} from './app-filter-box/app-filter-box.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppBoxesGridComponent} from './app-boxes-grid/app-boxes-grid.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    AppFilterBoxComponent,
    AppBoxesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
