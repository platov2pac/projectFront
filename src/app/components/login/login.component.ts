import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginForm} from "../../forms/loginForm";
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../dto/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from 'src/app/dto/role';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authUser!: User;
  user!: LoginForm;
  checkOutForm;
  errorStatus: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.checkOutForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(user: LoginForm) {
    if (this.checkOutForm.valid) {
      this.checkOutForm.reset();
      this.user = user;
    }
    this.userService.getUserByLoginPassword(this.user.login, this.user.password).subscribe((user) => {
        this.authUser = user;
        console.log()
        if (this.authUser != undefined) {
          localStorage.setItem("login", this.authUser.login);
          let rolesNames: any[];
          rolesNames = [];
          this.authUser.roles.forEach(role => {
            rolesNames.push(role.name)
          })
          localStorage.setItem("roles", JSON.stringify(rolesNames));
          this.router.navigate(['/welcome']);
        }
      }
      ,
      error => {
        this.errorStatus = error.status;
      }
    );
    // this.userService.getLocalUserByLoginAndPassword(this.user.login, this.user.password).forEach(
    //   (data) => {
    //     this.authUser = data;
    //     if (this.authUser != undefined) {
    //       localStorage.setItem("login", this.authUser.login);
    //       let rolesNames: any[];
    //       rolesNames = [];
    //       this.authUser.roles.forEach(role => {
    //         rolesNames.push(role.name)
    //       })
    //       localStorage.setItem("roles", JSON.stringify(rolesNames));
    //       this.router.navigate(['/welcome']);
    //     }
    //   });
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(param => {
      if (param.get('lang') !== null) {
        localStorage.setItem('locale', <string>param.get('lang'));
      }

    });
  }

}
