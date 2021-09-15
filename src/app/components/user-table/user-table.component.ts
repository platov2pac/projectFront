import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../dto/user";
import {Role} from "../../dto/role";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  roles: string[] = [];

  editUser(login: string) {
    this.router.navigate(['editUser', login]);
  }

  addUser() {
    this.router.navigate(['editUser']);
  }

  deleteUser(login: string) {
    this.userService.deleteByLogin(login).subscribe(() => this.ngOnInit());
  }

  constructor(
    private userService: UserServiceService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users
    }, error => {
      if (error.status === 403) {
        this.router.navigate(['welcome']);
      }
    });
  }

  displayRoles(roles: Role[]) {
    let userRoles: string[] = [];
    roles.forEach(role => userRoles.push(role.name))
    return userRoles;
  }

}
