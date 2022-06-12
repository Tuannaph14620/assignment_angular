import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.css']
})
export class SkillPageComponent implements OnInit {
  skillList!: ISkill[]
  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.getSkillList()
  }

  getSkillList(){
    this.skillService.getSkillList().subscribe(data => {
      this.skillList = data;
    })
  }
}
