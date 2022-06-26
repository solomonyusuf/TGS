import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
data:any;
model:any;
  view:boolean;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {

  }
  form = new FormGroup({
    ID:new FormControl('')
  });
  public getAll() {
    this.view= true;
    this.http.get(`/api/Student/${this.model}` )
      .subscribe(
        data => {
          this.data = data;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
