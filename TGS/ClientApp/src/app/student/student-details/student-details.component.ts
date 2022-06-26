import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'studentdetails/:id',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: any;
  detail: any;
    submit: boolean;
    results: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getResult();

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

}




