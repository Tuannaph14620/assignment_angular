import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { IInfo } from 'src/app/model/info';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-info-add',
  templateUrl: './info-add.component.html',
  styleUrls: ['./info-add.component.css']
})
export class InfoAddComponent implements OnInit {
  info : IInfo ={
    name: "",
    address: "",
    birthday:"",
    email:"",
    graduate:"",
    image:"",
    majors:"",
    phone:0,
    note:"",
    school:"",
    course:"",
    website:""
  }
  constructor(
    private infoService: InfoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.infoService.getInfo(id).subscribe(data => {
        this.info = data
      })
    }
  }
  
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.infoService.updateInfo(this.info).subscribe(data => {
        this.router.navigateByUrl('/admin/info')
      })
    }else{
      this.infoService.addInfo(this.info).subscribe(data => {
        this.router.navigateByUrl('/admin/info')
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
    this.info.image = response.data.url
  }

}
