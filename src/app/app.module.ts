import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppFilterBoxComponent} from './app-filter-box/app-filter-box.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppBoxesGridComponent} from './app-boxes-grid/app-boxes-grid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {API_KEY, GoogleSheetsDbService} from "ng-google-sheets-db";
import { AppTableFillComponent } from './app-table-fill/app-table-fill.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFilterBoxComponent,
    AppBoxesGridComponent,
    AppTableFillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: 'AIzaSyB26KSKegEIUZrNN1juovnMbH2GG_W5um0'
    },GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
