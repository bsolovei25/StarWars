import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {GoogleSheetsDbServiceService} from "../services/api/google-sheets-db-service.service";
import {attributesMapping, TableFields} from "../core/models/characterAttributesMapping";
import {environment} from "../environments/environments";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-app-table-fill',
  templateUrl: './app-table-fill.component.html',
  styleUrls: ['./app-table-fill.component.scss']
})
export class AppTableFillComponent implements OnInit {

  characters$: Observable<string[][]>
  displayedColumns: string[] = [];
  rowsData: string[][] = [];
  dataSource:string[][] = [];

  constructor(private GoogleSheetsDbServiceService:GoogleSheetsDbServiceService) { }


  ngOnInit(): void {

    this.characters$ = this.GoogleSheetsDbServiceService.getRows('1q5fcamBqkSc02zXKj7rNWPz0efn53Emuuo9gjIgYA0w', "Page1");
    //this.characters$ = this.GoogleSheetsDbServiceService.getRows('1q5fcamBqkSc02zXKj7rNWPz0efn53Emuuo9gjIgYA0w', "Page1", attributesMapping);
    this.characters$.subscribe(tableRows => {
      console.log(tableRows)
      this.displayedColumns = tableRows[0];
      (tableRows.forEach((row,index) => {
        if (index !== 0) {
          this.rowsData.push(row)
        }
      }))
    }
    );
    console.log(this.rowsData)
    this.dataSource =this.rowsData;
  }




}
