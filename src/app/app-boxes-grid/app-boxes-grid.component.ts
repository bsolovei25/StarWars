import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {People, Person} from "../@shared/functions/person-function";
import {ApiUserService} from "../services/api/api.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-app-boxes-grid',
  templateUrl: './app-boxes-grid.component.html',
  styleUrls: ['./app-boxes-grid.component.scss']
})
export class AppBoxesGridComponent implements OnInit {
  public cards$: Observable<Person>;
  public data:Array<People>;
  constructor(private api:ApiUserService) { }


  ngOnInit(): void {
    this.parsePerson();
  }

  public parsePerson(): void {
    this.api.getPeopleInfo().subscribe(people => {
      // @ts-ignore
      this.data = people.results.map((person,personIndex) => {
        this.api.getHomeWorld(personIndex).subscribe(world => {
          person.homeworldPlanet = world;
          //this.data = res.results;
          // console.log(this.data[0].homeworld);
        })
        this.api.getStarshipsShip(personIndex).subscribe(ships => {
          person.starshipsShip = ships;
          //this.data = res.results;
          // console.log(this.data[0].homeworld);
        })
        this.api.getFilms(personIndex).subscribe(films => {
          person.filmName = films;
          //this.data = res.results;
          // console.log(this.data[0].homeworld);
        })
      })
      //this.data = res.results;
      // console.log(this.data[0].homeworld);
    })
    // this.api.getHomeWorld().subscribe(res => {
    //   debugger
    //   console.log(res);
    //   //this.data = res.results;
    //  // console.log(this.data[0].homeworld);
    // })
    // this.api.getStarshipsShip().subscribe(res => {
    //   debugger
    //   console.log(res);
    //   //this.data = res.results;
    //   // console.log(this.data[0].homeworld);
    // })
    // this.api.getFilms().subscribe(res => {
    //   debugger
    //   console.log(res);
    //   //this.data = res.results;
    //   // console.log(this.data[0].homeworld);
    // })
  }

}
