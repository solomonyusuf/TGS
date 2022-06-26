import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'resultdetail/:id',
  templateUrl: './resultdetail.component.html'
})
export class ResultDetailComponent implements OnInit {
  id: any;
  detail: any;
    submit: boolean;
    results: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getResult();
    
  }

  public addsubject(id) {
    return `addsubject/${id}`
  }
  public getResult() {
    this.http.get(`api/Result/${this.id}`).subscribe(res => {
      this.getStudent(res['studentId']);
      this.results = res;
    })
  }
 
  public getStudent(id) {
    this.http.get(`api/Student/${id}`).subscribe(res => {
      console.log(res);
      this.detail = res;
    })
  }

  public Delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Subject/${id}`).subscribe(res => {
        this.getResult();
        console.log(res);
      })
    } else {
      this.getResult();
    }
  }








}
