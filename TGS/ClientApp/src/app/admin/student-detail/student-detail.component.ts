import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'studentdetail/:id',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public id: any;
  detail$: Observable<any>;

    
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.detail$ = this.http.get(`${this.url}/${this.id}`);
   this.getId();
    
  }
  public url = 'api/Student';

  public async getParent(parentId) {
    await this.http.get(`api/parent/${parentId}`).subscribe(res => {
      console.log(res);

      this.form = new FormGroup({
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

  public async getId() {
    await this.http.get(`${this.url}/${this.id}`).subscribe(res => {
  
      console.log(res);
      this.form = new FormGroup({
        StudentId: new FormControl(res['studentId']),
        ImgPath: new FormControl(res['imgPath']),
        FirstName: new FormControl(res['firstName']),
        LastName: new FormControl(res['lastName']),
        MiddleName: new FormControl(res['middleName']),
        Class: new FormControl(res['class']),
        Sex: new FormControl(res['sex']),
        DOB: new FormControl(res['dob']),
        OriginState: new FormControl(res['originState'])
      });
      this.parent = new FormGroup({
        StudentId: new FormControl(res['studentId']),
      });
    });

  }

 /* public async Submit() {
    await this.http.put(`${this.url}/${this.id}`, this.form.value).subscribe(res => {
      console.log(res);
      this.getId();
      this.detail$;
      // this.router.navigate(['/students']);
    });
  }*/
 /* public async Submit() {
    await this.http.post(`api/Parent`, this.parent.value).subscribe(res => {
      console.log(res);
      this.getParent(res['parentId']);
      this.detail$;
    })
  }*/
  public form = new FormGroup({
    StudentId: new FormControl(''),
    ImgPath: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    MiddleName: new FormControl(''),
    Class: new FormControl(''),
    Sex: new FormControl(''),
    DOB: new FormControl(''),
    OriginState: new FormControl(''),
  });

  public parent = new FormGroup({
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
}
