import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedRoles: string [] = [];
  checkOutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private router: Router) {
    this.checkOutForm = this.formBuilder.group({
      login: '',
      password: '',
      email: '',
      dob: '',
      roles: []
    })
  }

  ngOnInit(): void {
    this.selectedRoles.push("admin")
  }

}
