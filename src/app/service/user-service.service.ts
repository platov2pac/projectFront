import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "../dto/user";
import {map} from "rxjs/operators";
import {users} from "../users";
import {AuthResponse} from "../forms/authResponse";
import {Role} from "../dto/role";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = users;

  displayRoles(roles: Role[]) {
    let userRoles: string[] = [];
    roles.forEach(role => userRoles.push(role.name))
    return userRoles;
  }

  getUserByLoginPassword(login: string, password: string): Observable<AuthResponse> {
    const body = {
      login: login,
      password: password
    }
    return this.http.post<AuthResponse>('http://localhost:8080/auth.jhtml', body);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/listUsers.jhtml');

  }

  getUserByLogin(login: string): Observable<User> {
    const params = new HttpParams().set('loginUser', login);
    return this.http.get<User>('http://localhost:8080/edituser.jhtml', {params});
  }

  editUser(editedUser: User, isEdit: boolean, loginUser:any) {
    if (isEdit) {
      const params = new HttpParams().set('loginUser', loginUser);
      return this.http.post('http://localhost:8080/edituser.jhtml', editedUser, {params});
    } else {
      return this.http.post('http://localhost:8080/edituser.jhtml', editedUser);
    }
  }

  deleteByLogin(login: string) {
    const params = new HttpParams().set('deletableLogin', login)
    return this.http.get<String>('http://localhost:8080/deleteUser.jhtml', {params});
  }

  constructor(private http: HttpClient) {
  }
}
