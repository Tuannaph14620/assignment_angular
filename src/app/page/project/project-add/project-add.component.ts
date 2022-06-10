import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { IProject } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  project: IProject= {
    name: '',
    image:"",
    description:"",
    language:"",
    link: ""
  }
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.projectService.getProject(id).subscribe(data => {
        this.project = data
      })
    }
  }

  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.projectService.updateProject(this.project).subscribe(data => {
        this.router.navigateByUrl('/admin/project')
      })
    }else{
      this.projectService.addProject(this.project).subscribe(data => {
        this.router.navigateByUrl('/admin/project')
      })
    }
  }
  async onChangeGetImg(e: any) {
    const file = e.target.files[0];
  const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dl8w6p4sf/image/upload";

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "jovx8mjh");

  // call api cloudinary

  const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
          "Content-Type": "application/form-data",
      },
  });
    this.project.image = response.data.url
  }

}
