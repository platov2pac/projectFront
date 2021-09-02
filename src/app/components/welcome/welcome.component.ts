import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
login:any
  constructor(private router: Router) { }

  ngOnInit(): void {
     this.login = localStorage.getItem("login")
    if (!this.login) {
      this.router.navigate(['/auth']);
    }
  }

}
