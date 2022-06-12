import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/model/info';
import { ISkill } from 'src/app/model/skill';
import { InfoService } from 'src/app/services/info.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

infoList!: IInfo[]

  constructor(
    private infoService: InfoService
    
  ) { }

  ngOnInit(): void {
    this.getInfo()

  }

  getInfo(){
    this.infoService.getInfoList().subscribe(data => {
      this.infoList = data;
    })
  }

  

}
