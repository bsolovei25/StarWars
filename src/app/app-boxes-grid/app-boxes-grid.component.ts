import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../@shared/functions/person-function";

@Component({
  selector: 'app-app-boxes-grid',
  templateUrl: './app-boxes-grid.component.html',
  styleUrls: ['./app-boxes-grid.component.scss']
})
export class AppBoxesGridComponent implements OnInit {

  public cards$: Observable<Person>;
  constructor() { }


  ngOnInit(): void {
    //this.getAllCards();
  }

  // public getAllCards(): Observable<Person>{
  //
  // }


}
