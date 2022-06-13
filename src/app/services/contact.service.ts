import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URL = `http://localhost:3000/contact`
  constructor(
    private http: HttpClient
  ) { }

  getContact(id:any){
    return this.http.get<IContact>(`${this.API_URL}/${id}`)
  }
  getContactList(){
    return this.http.get<IContact>(`${this.API_URL}`)
  }
  addContact(contact:IContact){
    return this.http.post<IContact>(`${this.API_URL}`, contact)
  }
  updateContact(contact:IContact){
    return this.http.put<IContact>(`${this.API_URL}/${contact.id}`, contact)
  }
  removeContact(id: number){
    return this.http.delete<IContact>(`${this.API_URL}/${id}`)
  }
}
