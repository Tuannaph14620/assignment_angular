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
skillList!: ISkill[]
  constructor(
    private infoService: InfoService,
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.getInfo()
    this.getSkillList()
  }

  getInfo(){
    this.infoService.getInfoList().subscribe(data => {
      this.infoList = data;
    })
  }

  getSkillList(){
    this.skillService.getSkillList().subscribe(data => {
      this.skillList = data;
    })
  }

}
