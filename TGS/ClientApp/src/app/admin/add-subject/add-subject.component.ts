import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from '../../Models/result';
import { Subject } from '../../Models/subject';

@Component({
  selector: 'addsubject/:id',
  templateUrl: './add-subject.component.html'
})
export class AddSubjectComponent implements OnInit {
  id: any;
  detail$: Observable<any>;
  submit: boolean;

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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getId();


  }
  public async getId() {
    await this.http.get(`api/Result/${this.id}`).subscribe(res => {
      console.log(res)
      this.subject.ResultId = res['resultId'];
      this.subject.StudentId = res['studentId'];

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
      // Position: this.subject.Position,
      ClassHighest: this.subject.ClassHighest,
      ClassLowest: this.subject.ClassLowest,
      Percentage: this.subject.Percentage,
      Grade: this.subject.Grade,
    }
    await this.http.post(`api/Subject`, data).subscribe(res => {
      this.getId();
      console.log(res);
      this.detail$;
      this.submit = true;
      this.router.navigate([`/resultdetail/${res['resultId']}`]);
    });
  }
















}
