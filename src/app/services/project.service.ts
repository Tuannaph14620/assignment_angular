import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API_URL = `http://localhost:3000/project`
  constructor(
   private http:HttpClient
  ) { }

  getProject(id: any){
    return this.http.get<IProject>(`${this.API_URL}/${id}`)
  }
  
  getProjectList(){
    return this.http.get<IProject[]>(`${this.API_URL}`)
  }
  removeProject(id: number){
    return this.http.delete<IProject>(`${this.API_URL}/${id}`);
  }
  addProject(project: IProject) {
    return this.http.post<IProject>(`${this.API_URL}`, project);
  }
  updateProject(project: IProject){
    return this.http.put<IProject>(`${this.API_URL}/${project.id}`, project);
  }
}
