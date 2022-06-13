import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/model/contact';
import { IInfo } from 'src/app/model/info';
import { ContactService } from 'src/app/services/contact.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact : IContact = {
    name: "",
    email: "",
    message: "",
    subject: ""
  }
  infoList!: IInfo[]
  constructor(
    private contactService: ContactService,
    private router: Router,
    private infoService: InfoService
  ) { }
  ngOnInit(): void {
    this.getInfoList()
  }
  getInfoList(){
    this.infoService.getInfoList().subscribe(data => this.infoList = data)
  }
  onSubmit(){
    this.contactService.addContact(this.contact).subscribe(data => {
      alert('Please wait for my response!')
    })
  }
}
