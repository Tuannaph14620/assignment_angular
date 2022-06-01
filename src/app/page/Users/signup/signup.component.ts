import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { IUser } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  user: IUser = {
    username: "",
    email: "",
    password: "",
    createdAt: Date.now()

  }
  submitForm(){
    this.UserService.signup(this.user).subscribe(data => {
      this.router.navigateByUrl('/signin')
    })
  } 
  
  constructor(private UserService: UserService,
              private router: Router,) { }

  ngOnInit(): void {
    
  }

}
