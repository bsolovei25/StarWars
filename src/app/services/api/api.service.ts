import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Person} from "../../@shared/functions/person-function";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  private readonly getUrlPerson: string = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {
    //this.restUrl = ``;
  }

  public getCards(): Observable<Person> {
    return this.http.get<Person>(this.getUrlPerson).pipe(
      tap(res=> {console.log(res)}),
      map(res => {return res})
    )
  }
}
