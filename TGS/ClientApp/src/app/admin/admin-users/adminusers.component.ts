import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'adminusers',
  templateUrl: './adminusers.component.html'
})
export class AdminUsersComponent {
  users:any;
    value: string;
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAll();

  }

  public getAll() {
    this.http.get(`api/Authentication`).subscribe(res => {
      this.users = res;
      console.log(res);

    })
  }
  public Delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Authentication/${id}`).subscribe(res => {
        console.log(res);
        this.getAll();
      })
    } else {
      this.getAll();
    }
  }

  public result(res) {
    return `${res.userName}`;
  }

  public search() {
    if (this.value == "") {
      this.getAll();
    } else {
      this.users = this.users.filter(res => {
        return this.result(res).toLocaleLowerCase().match(this.value.toLocaleLowerCase());
      })
    }
  }

}
