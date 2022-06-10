import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  API_URL = `http://localhost:3000/skills`
  constructor(
   private http:HttpClient
  ) { }

  getSkill(id: any){
    return this.http.get<ISkill>(`${this.API_URL}/${id}`)
  }
  
  getSkillList(){
    return this.http.get<ISkill[]>(`${this.API_URL}`)
  }
  removeSkill(id: number){
    return this.http.delete<ISkill>(`${this.API_URL}/${id}`);
  }
  addSkill(skill: ISkill) {
    return this.http.post<ISkill>(`${this.API_URL}`, skill);
  }
  updateSkill(skill: ISkill){
    return this.http.put<ISkill>(`${this.API_URL}/${skill.id}`, skill);
  }
}
