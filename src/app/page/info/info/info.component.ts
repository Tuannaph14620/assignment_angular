import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/model/info';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infoList!: IInfo[]
  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    this.getInfoList()
  }

  getInfoList(){
    this.infoService.getInfoList().subscribe(data => {
    this.infoList = data;
    })
  }
  onHandleRemove(id: number){
    const action = window.confirm('Do you want to delete this info?')
    if(action){
      this.infoService.removeInfo(id).subscribe(data =>{
        this.infoList = this.infoList.filter(item => item.id !== id)
      })
    }
  }
}
