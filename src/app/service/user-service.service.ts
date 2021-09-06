import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../dto/user";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users!: User[];

  getUserByLoginPassword(login: string, password: string): Observable<User[]> {
    return this.http.get<User[]>('/assets/users.json').pipe(map((response) => {
      return response.filter((data) => data.login === login && data.password === password);
    }));
  }

  getAllUser() {
    return this.http.get<User[]>('/assets/users.json').subscribe((data) => this.users = data);
  }

  getUserByLogin(login: string): Observable<User[]> {
    return this.http.get<User[]>('/assets/users.json').pipe(map((response) => {
      return response.filter((data) => data.login === login);
    }));
  }

  addLocalUser(user:User){
    this.users.push(user);
  }
  getAllLocalUsers() {

    return this.users;
  }

  constructor(private http: HttpClient) {
    this.http.get<User[]>('/assets/users.json').subscribe((data) => this.users = data);
  }
}
