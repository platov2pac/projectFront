import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  checkOutForm
  constructor(private formBuilder:FormBuilder,
              private userService:UserServiceService,
              private router:Router) {
    this.checkOutForm = this.formBuilder.group({
      login:'',
      password:'',
      email:'',
      dob:'',
      roles:[]
    })
  }

  ngOnInit(): void {
  }

}
