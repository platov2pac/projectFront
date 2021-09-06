import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
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
  users!: User[];

  constructor(private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private router: ActivatedRoute) {
    this.checkOutForm = this.formBuilder.group({
      login: '',
      password: '',
      email: '',
      dob: '',
      roles:''
    });
    this.router.paramMap.subscribe(param => {
      this.loginAuthUser = param.get('userLogin');
    });
  }


  ngOnInit(): void {
    this.selectedRoles.push("admin");
    this.userService.getUserByLogin(this.loginAuthUser).subscribe((data) => {
      this.users = data;
    })
  }

}
