import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, from, interval, Observable, pipe, zip} from "rxjs";
import {Film, People, Person, Planet, StarShip} from "../../@shared/functions/person-function";
import {concatMap, map, mergeMap, switchMap, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  private readonly GETPERSONURL: string = 'https://swapi.dev/api/people/1';
  private readonly GETPEOPLE: string = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {
  }

  // public getPersonInfo(): Observable<Person> {
  //
  //   // @ts-ignore
  //   return this.http.get<Person>(this.getUrlPerson).pipe(
  //     switchMap(character => forkJoin([
  //       this.http.get<Planet>(character.homeworld),
  //       ...character.starships.map(ship => this.http.get<StarShip>(ship)),
  //       ...character.films.map(film => this.http.get<Film>(film))
  //     ]).pipe(
  //       map(([world,ship]) => ({
  //         ...character,
  //         homeworldPlanet: world,
  //         starshipsShip: ship,
  //       })
  //     )
  //   )));
  // }

  public getPeopleInfo():Observable<People> {
    return this.http.get<People>(this.GETPEOPLE);
  }

  public getHomeWorld(personIndex:number):Observable<Planet> {
    return this.http.get<Person>(this.GETPEOPLE + `/${personIndex+1}`).pipe(
      switchMap(character =>
        this.http.get<Planet>(character.homeworld)
      )
    )
  }

  public getFilms(personIndex:number):Observable<Film> {
    // @ts-ignore
    return this.http.get<Person>(this.GETPEOPLE + `/${personIndex+1}`).pipe(
      switchMap(character => forkJoin([
        ...character.films.map(film => this.http.get<Film>(film))
      ])
      )
    );
  }

  public getStarshipsShip(personIndex:number):Observable<StarShip> {
    // @ts-ignore
    return this.http.get<Person>(this.GETPEOPLE + `/${personIndex+1}`).pipe(
      switchMap(character => forkJoin([
          ...character.starships.map(ship => this.http.get<StarShip>(ship))
        ])
      )
    );
  }
}
