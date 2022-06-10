import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { ISkill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill : ISkill ={
    name:"",
    image: ""
  }
  constructor( 
    private skillService: SkillService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.skillService.getSkill(id).subscribe(data => {
        this.skill = data
      })
    }
  }

  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.skillService.updateSkill(this.skill).subscribe(data => {
        this.router.navigateByUrl('/admin/skills')
      })
    }else{
      this.skillService.addSkill(this.skill).subscribe(data => {
        this.router.navigateByUrl('/admin/skills')
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
    this.skill.image = response.data.url
  }

}
