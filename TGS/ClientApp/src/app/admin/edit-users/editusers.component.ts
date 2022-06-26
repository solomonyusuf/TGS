import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { USER } from '../../Models/user';

@Component({
  selector: 'editusers/:id',
  templateUrl: 'editusers.component.html'
})
export class EditUsersComponent {
  users: any;
  id: any;
  user: USER = {
    id: '',
    imgPath: '',
    email: '',
    userName: '',
    phoneNumber: '',
    role: '',
    normalizedUserName: '',
    passwordHash: '',
    securityStamp: '',
    concurrencyStamp: '',
    lockoutEnabled: '',
    accessFailedCount: '',
    normalizedEmail: '',
    phoneNumberConfirmed: '',
    twoFactorEnabled: '',
    lockoutEnd: '',
    emailConfirmed: '',
  }
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getId();

  }

  public getId() {
    this.http.get(`api/Authentication/${this.id}`).subscribe(res => {
      this.users = res;
      console.log(res);
      this.user.imgPath = res['imgPath'];
      this.user.email = res['email'];
      this.user.userName = res['userName'];
      this.user.phoneNumber = res['phoneNumber'];
      this.user.role = res['role'];
      this.user.normalizedUserName = res['normalizedUserName'];
      this.user.passwordHash = res['passwordHash'];
      this.user.securityStamp = res['securityStamp'];
      this.user.concurrencyStamp = res['concurrencyStamp'];
      this.user.lockoutEnabled = res['lockoutEnabled'];
      this.user.accessFailedCount = res['accessFailedCount'];
      this.user.normalizedEmail = res['normalizedEmail'];
      this.user.phoneNumberConfirmed = res['phoneNumberConfirmed'];
      this.user.twoFactorEnabled = res['twoFactorEnabled'];
      this.user.lockoutEnd = res['lockoutEnd'];
      this.user.emailConfirmed = res['emailConfirmed'];

    })
  }
  public submit() {
    const data = {
      id: this.id,
      imgPath: this.user.imgPath,
      email: this.user.email,
      userName: this.user.userName,
      phoneNumber: this.user.phoneNumber,
      normalizedUserName: this.user.normalizedUserName,
      passwordHash: this.user.passwordHash,
      securityStamp: this.user.securityStamp,
      role: this.user.role,
      concurrencyStamp: this.user.concurrencyStamp,
      lockoutEnabled: this.user.lockoutEnabled,
      accessFailedCount: this.user.accessFailedCount,
      normalizedEmail: this.user.normalizedEmail,
      phoneNumberConfirmed: this.user.phoneNumberConfirmed,
      twoFactorEnabled: this.user.twoFactorEnabled,
      lockoutEnd: this.user.lockoutEnd,
      emailConfirmed: this.user.emailConfirmed,
    }
    this.http.put(`api/Authentication/${this.id}`, data).subscribe(res => {
      this.getId();
      console.log(res);

    })
  }
  public Delete() {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Authentication/${this.id}`).subscribe(res => {
        console.log(res);
        this.getId();
      })
    } else {
      this.getId();
    }
  }

}
