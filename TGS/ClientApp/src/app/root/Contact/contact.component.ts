import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../Models/contact';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public contacts: Contact[]=[];
  public contact: Contact = {
  id: '',
  FullName: '',
  PhoneNumber: '',
  Email: '',
  Message:''
}

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit():void {

  }

  saveContact(): void {
    const data = {
      FullName: this.contact.FullName,
      phoneNumber: this.contact.PhoneNumber,
      Email: this.contact.Email,
      Message: this.contact.Message
    }
    this.http.post('api/Contact', data)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/contact']);
      },
        error => {
          console.log(error);
        });



  }










}
