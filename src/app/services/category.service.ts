import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'http://localhost/'
  constructor(private http: HttpClient) { }
}
