import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../../dto/user";
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";
import {Role} from "../../dto/role";
import {subscribeOn} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input() checkOutForm!: FormGroup;
  roles: Role[]=[];

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
  }


  addUser(user: User) {
    user.roles.forEach(role => {

      // @ts-ignore
      let userRole: Role = {name: role};
      console.log(userRole)
      this.roles.push(userRole);

    });
    user.roles = this.roles;
    this.userService.addLocalUser(user);
    this.router.navigate(['/userList']);
  }

  ngOnInit(): void {
  }

}
