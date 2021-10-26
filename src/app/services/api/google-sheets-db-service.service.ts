import { Injectable } from '@angular/core';
import {API_KEY} from "ng-google-sheets-db";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {attributesMapping, TableFields} from "../../core/models/characterAttributesMapping";

export interface GoogleSpreadsheetsResponse {
  values: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsDbServiceService {
  public API_KEY:string = 'AIzaSyB26KSKegEIUZrNN1juovnMbH2GG_W5um0';
  defaultActiveValues: any[] = ['true', '1', 'yes'];

  constructor(private http:HttpClient) { }

  // public get(sheetid:string, sheetName: string, attrMapping:object | string[]): Observable<TableFields>{
  //   return this.getRows(sheetid, sheetName).pipe(
  //     map((rows: string[][]) =>
  //       this.rowsToEntries(rows)
  //         .filter((obj: object) =>
  //           activeValues.includes(obj[isActiveColumnName].toLowerCase())
  //         )
  //         .map(
  //           (entry: object) =>
  //             this.getObjectFromEntry(entry, attributesMapping) as T
  //         )
  //     )
  //   )
  // }

  public cleanColumnName(columnName: string): string {
    return columnName.trim();
  }

  // public rowsToEntries(rows: string[][]): object[] {
  //   const columns: Array<string> = rows[0].map(this.cleanColumnName);
  //   return rows.slice(1).map((row: Array<string>) =>
  //     columns.reduce((entry: object, columnName: string, idx: number) => {
  //       entry[columnName] = row.length > idx ? row[idx] : '';
  //       return entry;
  //     }, {})
  //   );
  // }

  private getSpreadsheetUrl(spreadsheetId: string, worksheetName: string): string {
    return (
      'https://sheets.googleapis.com/v4/spreadsheets/' +
      spreadsheetId +
      '/values/' +
      encodeURI(worksheetName) +
      '?key=' +
      this.API_KEY
    );
  }

  public getRows(spreadsheetId: string, worksheetName: string): Observable<string[][]> {
    const spreadsheetUrl = this.getSpreadsheetUrl(spreadsheetId, worksheetName);

    return this.http.get<GoogleSpreadsheetsResponse>(spreadsheetUrl).pipe(
      map((jsonRes) => jsonRes.values),
    );
  }

}
