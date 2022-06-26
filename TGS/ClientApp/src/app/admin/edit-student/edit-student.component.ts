import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'editstudent/:id',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  public id: any;
  detail$: Observable<any>;
  StudentID: any;
  result: any;
  public response: { dbPath: '' };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getParent();




  }
  public url = 'api/Student';

  public async getParent() {
    await this.http.get(`api/parent/${this.id}`).subscribe(res => {
      console.log(res);
      this.getId(res['studentId']);
      this.StudentID = res['studentId'];
      this.detail$ = this.http.get(`${this.url}/${this.StudentID}`);
      this.parent = new FormGroup({
        ParentId: new FormControl(res['parentId']),
        StudentId: new FormControl(res['studentId']),
        ParentName: new FormControl(res['parentName']),
        Email: new FormControl(res['email']),
        Occupation: new FormControl(res['occupation']),
        City: new FormControl(res['city']),
        PhoneNumber_1: new FormControl(res['phoneNumber_1']),
        PhoneNumber_2: new FormControl(res['phoneNumber_2']),
        Address_1: new FormControl(res['address_1']),
        Address_2: new FormControl(res['address_2']),
      });
    });
  }

  public async getId(id) {
    await this.http.get(`${this.url}/${id}`).subscribe(res => {
      console.log(res)
      this.form = new FormGroup({
        StudentId: new FormControl(res['studentId']),
        ImgPath: new FormControl(res['imgPath']),
        FirstName: new FormControl(res['firstName']),
        LastName: new FormControl(res['lastName']),
        MiddleName: new FormControl(res['middleName']),
        Status: new FormControl(res['status']),
        Class: new FormControl(res['class']),
        Sex: new FormControl(res['sex']),
        DOB: new FormControl(res['dob']),
        OriginState: new FormControl(res['originState'])
      });

    });

  }

  public uploadFinished = (event) => {

    this.response = event;
    let p: any = event.dbPath
  }

  public async Submit() {
    if (!this.response.dbPath == null) {
      let p: any = this.response.dbPath;

      this.form['ImgPath'] = this.response.dbPath;

      await this.http.put(`${this.url}/${this.StudentID}`, this.form.value).subscribe(res => {
        console.log(res);
        this.info();
        this.getId(this.StudentID);
        this.detail$;
        // this.router.navigate(['/students']);
      });


    } else {
      await this.http.put(`${this.url}/${this.StudentID}`, this.form.value).subscribe(res => {
        console.log(res);
        this.info();
        this.getId(this.StudentID);
        this.detail$;
        // this.router.navigate(['/students']);
      });
    }
  }
  public async info() {
    await this.http.put(`api/Parent/${this.id}`, this.parent.value).subscribe(res => {
      console.log(res);
      this.getParent();
    })
  }
  public form = new FormGroup({
    StudentId: new FormControl(''),
    ImgPath: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    MiddleName: new FormControl(''),
    Class: new FormControl(''),
    Status: new FormControl(''),
    Sex: new FormControl(''),
    DOB: new FormControl(''),
    OriginState: new FormControl(''),
  });

  public parent = new FormGroup({
    ParentId: new FormControl(''),
    StudentId: new FormControl(''),
    ParentName: new FormControl(''),
    Email: new FormControl(''),
    Occupation: new FormControl(''),
    City: new FormControl(''),
    PhoneNumber_1: new FormControl(''),
    PhoneNumber_2: new FormControl(''),
    Address_1: new FormControl(''),
    Address_2: new FormControl(''),
  });

  public delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Student/${id}`).subscribe(res => {
        console.log(res);
        this.router.navigate(['/adminstudent']);
        this.getParent();
      })
    } else {
      this.getParent();

    }
  }
}
