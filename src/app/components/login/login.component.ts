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
    this.userService.getUserByLoginPassword(this.user.login, this.user.password).subscribe((resp) => {
        console.log()
        if (resp != undefined) {
          localStorage.setItem("login", resp.login);
          localStorage.setItem("token", resp.token);
          let rolesNames: any[];
          rolesNames = [];
          resp.roles.forEach(role => {
            rolesNames.push(role.name)
          })
          //console.log(resp.token)
          localStorage.setItem("roles", JSON.stringify(rolesNames));
          this.router.navigate(['/welcome']);
        }
      }
      ,
      error => {
        this.errorStatus = error.status;
        this.checkOutForm.controls['password'].reset();
      }
    );
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(param => {
      if (param.get('lang') !== null) {
        localStorage.setItem('locale', <string>param.get('lang'));
      }

    });
  }

}
