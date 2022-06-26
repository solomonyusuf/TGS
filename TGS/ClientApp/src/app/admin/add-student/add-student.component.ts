import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../../Models/parent';
import { Student } from '../../Models/student';

@Component({
  selector: 'addstudent',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  path: string;
  submitted: boolean;
  public response: { dbPath: '' };
  public student: Student = {
    ImgPath: '',
    FirstName: '',
    LastName: '',
    MiddleName: '',
    Status: '',
    Class: '',
    Sex: '',
    DOB: '',
    OriginState: '',
  };
  public parent: Parent = {
    StudentId: '',
    ParentName: '',
    Email: '',
    Occupation: '',
    City: '',
    PhoneNumber_1: '',
    PhoneNumber_2: '',
    Address_1: '',
    Address_2: '',
  }
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  public url = 'api/Student/';

  public async Submit() {
    const data = {
      ImgPath: this.response.dbPath,
      FirstName: this.student.FirstName,
      LastName: this.student.LastName,
      MiddleName: this.student.MiddleName,
      Class: this.student.Class,
      Status: this.student.Status,
      Sex: this.student.Sex,
      DOB: this.student.DOB,
      OriginState: this.student.OriginState,
    };
    await this.http.post(`${this.url}`, data).subscribe(res => {
      console.log(res);
      this.path = this.editstudent(res['studentId']);
      this.parent.StudentId = res['studentId'];
      this.submitted = true;
      // this.router.navigate([`/${this.path}`]);
    });
  }

  public async Create() {
    const data = {
      StudentId: this.parent.StudentId,
      ParentName: this.parent.ParentName,
      Email: this.parent.Email,
      Occupation: this.parent.Occupation,
      City: this.parent.City,
      PhoneNumber_1: this.parent.PhoneNumber_1,
      PhoneNumber_2: this.parent.PhoneNumber_2,
      Address_1: this.parent.Address_1,
      Address_2: this.parent.Address_2,
    }
    await this.http.post(`api/Parent`, data).subscribe(res => {
      console.log(res);
      this.path = this.editstudent(res['studentId']);
      this.router.navigate([`/${this.path}`]);
    });
  }

  public editstudent(id) {
    return `studentdetail/${id}`
  }



  public uploadFinished = (event) => {
    this.response = event;
  }





}
