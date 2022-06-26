import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'adminstudent',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  data$: any;
  p: any = 1;
  amount: any;
    value: string;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAll();

  }
  public async getAll() {
    await this.http.get(`api/Student`).subscribe(res => {
      this.data$ = res;
    });
  }

  public delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Student/${id}`).subscribe(res => {
        console.log(res);
        this.data$ = this.http.get(`api/Student`);
      })
    } else {
      this.data$ = this.http.get(`api/Student`);
    }
  }

  public result(res) {
    return `${res.firstName + '' + res.lastName}`;
  }

  public search() {
    if (this.value == "") {
      this.getAll();
    } else {
      this.data$ = this.data$.filter(res => {
          return this.result(res).toLocaleLowerCase().match(this.value.toLocaleLowerCase());
        })
    }
  }

}
