import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/model/info';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  infoList!: IInfo[]
  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    this.getInfoList()
  }
  getInfoList(){
    this.infoService.getInfoList().subscribe(data => this.infoList = data)
  }
}
