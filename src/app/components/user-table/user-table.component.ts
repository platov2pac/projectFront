import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";
import {User} from "../../dto/user";
import {Role} from "../../dto/role";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users!: User[];
  roles!: string[];

  editUser(login: string) {
    this.router.navigate(['editUser', login]);
  }

  addUser() {
    this.router.navigate(['editUser']);
  }

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    });
  }

  displayRoles(roles: Role[]) {
    let userRoles: string[] = [];
    roles.forEach(role => userRoles.push(role.name))
    return userRoles;
  }

}
