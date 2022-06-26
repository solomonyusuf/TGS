import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from '../../Models/result';
import { Subject } from '../../Models/subject';

@Component({
  selector: 'addresult/:id',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  id: any;
  detail$: Observable<any>;
  submit: boolean;
  public result: Result = {
    StudentId: '',
    Class: '',
    ClassHighest: '',
    ClassLowest: '',
    Percentage: '',
    Position: '',
    Term: '',
    Session: '',
  };
  public subject: Subject = {
    StudentId: '',
    ResultId: '',
    Name: '',
    FirstTest: '',
    SecondTest: '',
    Attendance: '',
    ExamScore: '',
    Total: '',
    Position: '',
    ClassHighest: '',
    ClassLowest: '',
    Percentage: '',
    Grade: '',
  };
  results: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getId();
    this.detail$ = this.http.get(`api/Student/${this.id}`);

  }
  public async getId() {
    await this.http.get(`api/Student/${this.id}`).subscribe(res => {
      console.log(res)
      this.result.StudentId = res['studentId'];
      this.subject.StudentId = res['studentId'];

    });
  }

  public async getResult(id) {
    await this.http.get(`api/Result/${id}`).subscribe(res => {
      console.log(res)
      this.subject.StudentId = res['studentId'];
      this.subject.ResultId = res['resultId'];
      this.results = res;
    });
  }


  public async Submit() {
    const data = {
      StudentId: this.result.StudentId,
      Class: this.result.Class,
      ClassHighest: this.result.ClassHighest,
      ClassLowest: this.result.ClassLowest,
      Percentage: this.result.Percentage,
      Position: this.result.Position,
      Term: this.result.Term,
      Session: this.result.Session,
    }
    await this.http.post(`api/Result`, data).subscribe(res => {
      this.getResult(res['resultId']);
      console.log(res);
      this.detail$;
      this.submit = true;
      this.router.navigate([`/resultdetail/${res['resultId']}`]);
    });
  }

  public async CreateSubject() {
    const data = {
      StudentId: this.subject.StudentId,
      ResultId: this.subject.ResultId,
      Name: this.subject.Name,
      FirstTest: this.subject.FirstTest,
      SecondTest: this.subject.SecondTest,
      Attendance: this.subject.Attendance,
      ExamScore: this.subject.ExamScore,
      Total: this.subject.Total,
      Position: this.subject.Position,
      ClassHighest: this.subject.ClassHighest,
      ClassLowest: this.subject.ClassLowest,
      Percentage: this.subject.Percentage,
      Grade: this.subject.Grade,
    }
    await this.http.post(`api/Subject`, data).subscribe(res => {
      this.getResult(res['resultId']);
      this.getId();
      console.log(res);
      this.detail$;
      this.submit = true;
      // this.router.navigate(['/students']);
    });
  }
















}
