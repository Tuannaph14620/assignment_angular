import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/model/info';
import { IProject } from 'src/app/model/project';
import { InfoService } from 'src/app/services/info.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  infoList!: IInfo[]
  projectList!: IProject[]
  constructor(
    private infoService: InfoService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getInfoList()
    this.getProjectList()
  }
  
  getInfoList(){
    this.infoService.getInfoList().subscribe(data => this.infoList = data)
  }

  getProjectList(){
    this.projectService.getProjectList().subscribe(data => this.projectList = data)
  }

}
