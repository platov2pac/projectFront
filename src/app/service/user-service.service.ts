import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../dto/user";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  getUserByLoginPassword(login: string, password: string): Observable<User[]> {
    return this.http.get<User[]>('/assets/users.json').pipe(map((response) => {
      return  response.filter((data) => data.login === login && data.password === password);
    }));
  }

  constructor(private http: HttpClient) {
  }
}
