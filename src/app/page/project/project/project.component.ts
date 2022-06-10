import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectList!: IProject[]
  constructor(
    private projectService: ProjectService 
  ) { }

  ngOnInit(): void {
    this.getProjectList()
  }

  getProjectList(){
    this.projectService.getProjectList().subscribe(data => this.projectList = data)
  }
  onHandleRemove(id: number){
    const action = window.confirm('Do you want to delete this info?')
    if(action){
      this.projectService.removeProject(id).subscribe(data =>{
        this.projectList = this.projectList.filter(item => item.id !== id)
      })
    }
  }
}
