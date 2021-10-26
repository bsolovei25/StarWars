import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {GoogleSheetsDbServiceService} from "../services/api/google-sheets-db-service.service";

@Component({
  selector: 'app-app-table-fill',
  templateUrl: './app-table-fill.component.html',
  styleUrls: ['./app-table-fill.component.scss']
})
export class AppTableFillComponent implements OnInit {

  private characters$: Observable<string[][]>
  public displayedColumns: string[] = [];
  public rowsData: string[][] = [];
  public dataSource:string[][] = [];

  constructor(private GoogleSheetsDbServiceService:GoogleSheetsDbServiceService) { }


  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(): void{
      this.characters$ = this.GoogleSheetsDbServiceService.getRows('1q5fcamBqkSc02zXKj7rNWPz0efn53Emuuo9gjIgYA0w', "Page1");
      this.characters$.subscribe(tableRows => {
          this.displayedColumns = tableRows[0];
          (tableRows.forEach((row,index) => {
            if (index !== 0) {
              this.rowsData.push(row)
            }
          }))
        }
      );
      this.dataSource = this.rowsData;
    }




}
