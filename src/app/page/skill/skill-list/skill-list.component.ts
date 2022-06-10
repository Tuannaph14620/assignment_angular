import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skillList!: ISkill[]
  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.getSkillList()
  }

  getSkillList(){
    this.skillService.getSkillList().subscribe(data => this.skillList = data);
  }
  onHandleRemove(id: number){
    const action = window.confirm('Do you want to delete this info?')
    if(action){
      this.skillService.removeSkill(id).subscribe(data =>{
        this.skillList = this.skillList.filter(item => item.id !== id)
      })
    }
  }
}
