import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "../dto/user";
import {map} from "rxjs/operators";
import {users} from "../users";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = users;

  getUserByLoginPassword(login: string, password: string): Observable<User[]> {
    const body = {
      login: login,
      pass: password
    }
    return this.http.post<User[]>('/assets/users.json', body);
  }
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/listUsers.jhtml');

  }
  getUserByLogin(login: string): Observable<User> {
    const params = new HttpParams().set('loginUser', login);
    return this.http.get<User>('http://localhost:8080/edituser.jhtml', {params});
  }

  //local methods
  getLocalUserByLogin(login: string) {
    return this.users.filter((user) => user.login === login);
  }

  getLocalUserByLoginAndPassword(login:string, password:string): User[]{
    return this.users.filter ((user)=>user.login === login && user.password === password);
  }

  addLocalUser(user: User) {
    this.users.push(user);
  }

  editLocalUer(editedUser: User) {
    this.users.forEach((editableUser, index) => {
      if (editableUser.login === editedUser.login) {
        this.users.splice(index,1);
        this.users.push(editedUser);
      }
    })

  }

  deleteLocalUserByLogin(login:string){
    this.users.forEach((user,index)=>{
      if(user.login=== login){
        users.splice(index,1)
      }
    })
  }
  getAllLocalUsers() {
    console.log("service getalllocal")
    return this.users;
  }

  constructor(private http: HttpClient) {
  }
}
