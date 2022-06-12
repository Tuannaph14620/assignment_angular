import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectList!: IProject[]
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjectList()
  }

  getProjectList(){
    this.projectService.getProjectList().subscribe(data => this.projectList = data)
  }

}
