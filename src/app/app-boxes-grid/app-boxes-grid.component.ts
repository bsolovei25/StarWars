import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../@shared/functions/person-function";
import {ApiUserService} from "../services/api/api.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-app-boxes-grid',
  templateUrl: './app-boxes-grid.component.html',
  styleUrls: ['./app-boxes-grid.component.scss']
})
export class AppBoxesGridComponent implements OnInit {
  public cards$: Observable<Person>;
  public data:Object;
  constructor(private api:ApiUserService) { }


  ngOnInit(): void {
    //this.parseCard();
  }

  public parseCard(): void {
    this.api.getCards().subscribe(res => {
      debugger
      console.log(res);
      this.data = res;
    })
  }

}
