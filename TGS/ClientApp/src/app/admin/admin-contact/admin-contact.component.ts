import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admincontact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  contacts: any;
  value: string;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAll();

  }

  public getAll() {
    this.http.get(`api/Contact`).subscribe(res => {
      this.contacts = res;
      console.log(res);

    })
  }
  public Delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Contact/${id}`).subscribe(res => {
        console.log(res);
        this.getAll();
      })
    } else {
      this.getAll();
    }
  }


  public clear() {
    if (window.confirm("are you sure you want to clear all messages ?")) {
      this.http.delete(`api/Contact`).subscribe(res => {
        console.log(res);
        this.getAll();
      })
    } else {
      this.getAll();
    }
  }

  public result(res) {
    return `${res.timeStamp}`;
  }

  public search() {
    if (this.value == "") {
      this.getAll();
    } else {
      this.contacts = this.contacts.filter(res => {
        return this.result(res).toLocaleLowerCase().match(this.value.toLocaleLowerCase());
      })
    }
  }

}
