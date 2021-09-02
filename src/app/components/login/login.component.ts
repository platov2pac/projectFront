import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginForm} from "../../forms/loginForm";
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../dto/user";
import {Router} from "@angular/router";
import {Role} from 'src/app/dto/role';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authUser!: User[];
  user!: LoginForm;
  checkOutForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
  ) {
    this.checkOutForm = this.formBuilder.group({
      login: '',
      password: ''
    })
  }

  onSubmit(user: LoginForm) {
    if (this.checkOutForm.valid) {
      this.checkOutForm.reset();
      this.user = user;
    }
    this.userService.getUserByLoginPassword(this.user.login, this.user.password).subscribe(
      (data: User[]) => {
        this.authUser = data;
        console.log(this.authUser)
        if (this.authUser.length != 0) {
          this.authUser.forEach(user => {
            localStorage.setItem("login", user.login);
            let rolesNames: any[];
            rolesNames = [];
            user.roles.forEach(role => {
              rolesNames.push(role.name)
            })
            localStorage.setItem("roles", JSON.stringify(rolesNames));
          });
          this.router.navigate(['/welcome']);
        }
      });
  }

  ngOnInit(): void {
  }

}
