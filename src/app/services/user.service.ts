import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL= "http://localhost:3000";
  
  constructor(private http: HttpClient) { }

  signup(user: IUser){
    return this.http.post<IUser>(`${this.API_URL}/signup`, user)
  }
  signin(user: IUser){
    return this.http.post<IUser>(`${this.API_URL}/signin`, user)
  }
}
