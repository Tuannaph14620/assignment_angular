import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // const a = JSON.parse(localStorage.getItem("user"))
  user: IUser = {
    email: "",
    password: "",
    createdAt: Date.now()

  }
  submitForm(){
    this.UserService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(data));
    })
  } 
  
  constructor(private UserService: UserService,
              private router: Router,) { }

  ngOnInit(): void {
    
  }

}
