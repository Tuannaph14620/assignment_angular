import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contact : IContact = {
    name: "",
    email: "",
    message: "",
    subject: ""
  }
  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.contactService.getContact(id).subscribe(data => {
      this.contact = data
    })
  }

  onSubmit(){
    
  }


}
