import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../../service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../dto/user";
import {Role} from "../../dto/role";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedRoles: string [] = [];
  checkOutForm: FormGroup;
  loginAuthUser: any;
  user: User = {login: '', email: '', password: '', dob: '', roles: []};
  users: User[] = [];
  userRoles: Role[] = [];


  constructor(private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private router: ActivatedRoute,
              private redRouter: Router) {
    this.checkOutForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      roles: [this.selectedRoles, [Validators.required]]
    });
    this.router.paramMap.subscribe(param => {
      this.loginAuthUser = param.get('userLogin');
    });
  }

  editUser(user: User, isEdit: boolean) {
    user.roles.forEach(role => {
      // @ts-ignore
      let userRole: Role = {name: role};
      this.userRoles.push(userRole);
    });
    user.roles = this.userRoles;
    this.userService.editUser(user, isEdit).subscribe(user => {
        this.redRouter.navigate(['/userList']);
      }
    );
    //this.userService.editLocalUer(user);


  }

  ngOnInit(): void {
    if (this.loginAuthUser != undefined) {
      this.userService.getUserByLogin(this.loginAuthUser).subscribe((user) => {
        user.roles.forEach(role => {
          this.selectedRoles.push(role.name);
          // this.checkOutForm.controls['roles'].setValue(role.name);
        });
        // this.user = user;
        this.checkOutForm.controls['login'].setValue(user.login);
        this.checkOutForm.controls['email'].setValue(user.email);
        this.checkOutForm.controls['dob'].setValue(user.dob);

      })
    }
  }

}
