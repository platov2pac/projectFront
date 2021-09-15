import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Role} from "../../dto/role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: any;
  roles: any;
  isAdmin: boolean = false;

  constructor(private router: Router) {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  welcome() {
    this.router.navigate(['/welcome'])
  }

  userList() {
    this.router.navigate(['/userList'])
  }

  ngOnInit(): void {
    this.login = localStorage.getItem("login")
    this.roles = JSON.parse(<string>localStorage.getItem("roles"));
    if (this.roles !== null) {
      this.roles.forEach((role: any) => {
        if (role === "ROLE_ADMIN") {
          this.isAdmin = true;
        }
      })
    }
  }

}
