import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'editresult/:id',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {
  id: any;
    key: string;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getSubject();

  }




  public async CreateSubject() {
    await this.http.put(`api/Subject/${this.id}`, this.subject.value).subscribe(res => {
      console.log(res);
      this.router.navigate([`/${this.key}`]);
    });
  }
  public keep(id) {
    return `resultdetail/${id}`;
  }
  public async getSubject() {
    await this.http.get(`api/subject/${this.id}`).subscribe(res => {
      this.getResult(res['resultId']);
      this.key = this.keep(res['resultId']);
     
      console.log(res)
      this.subject = new FormGroup({
        ResultId: new FormControl(res['resultId']),
        StudentId: new FormControl(res['studentId']),
        SubjectId: new FormControl(res['subjectId']),
        Name: new FormControl(res['name']),
        FirstTest: new FormControl(res['firstTest']),
        SecondTest: new FormControl(res['secondTest']),
        Attendance: new FormControl(res['attendance']),
        ExamScore: new FormControl(res['examScore']),
        Total: new FormControl(res['total']),
        Position: new FormControl(res['position']),
        ClassHighest: new FormControl(res['classHighest']),
        ClassLowest: new FormControl(res['classLowest']),
        Percentage: new FormControl(res['percentage']),
        Grade: new FormControl(res['grade']),
      });
    });
  }
  public async getResult(id) {
    await this.http.get(`api/Result/${id}`).subscribe(res => {
      console.log(res)
    });
  }
  public subject = new FormGroup({
    StudentId: new FormControl(''),
    ResultId: new FormControl(''),
    Name: new FormControl(''),
    FirstTest: new FormControl(''),
    SecondTest: new FormControl(''),
    Attendance: new FormControl(''),
    ExamScore: new FormControl(''),
    Total: new FormControl(''),
    Position: new FormControl(''),
    ClassHighest: new FormControl(''),
    ClassLowest: new FormControl(''),
    Percentage: new FormControl(''),
    Grade: new FormControl(''),
  });
}
