import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  private readonly getUrlPerson: string = 'https://swapi.dev/api/people';

  // constructor(appConfig: AppConfigService, private http: HttpClient) {
  //   this.restUrl = ``;
  // }

  // public async getUserById(id: number): Promise<IUser> {
  //   return await this.http.get<IUser>(`${this.restUrl}/user/${id}`).toPromise();
  // }
}
