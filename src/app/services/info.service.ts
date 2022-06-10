import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfo } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  API_URL = `http://localhost:3000/info`
  constructor(
   private http:HttpClient
  ) { }

  getInfo(id: any){
    return this.http.get<IInfo>(`${this.API_URL}/${id}`)
  }
  
  getInfoList(){
    return this.http.get<IInfo[]>(`${this.API_URL}`)
  }
  removeInfo(id: number){
    return this.http.delete<IInfo>(`${this.API_URL}/${id}`);
  }
  addInfo(info: IInfo) {
    return this.http.post<IInfo>(`${this.API_URL}`, info);
  }
  updateInfo(info: IInfo){
    return this.http.put<IInfo>(`${this.API_URL}/${info.id}`, info);
  }
}
