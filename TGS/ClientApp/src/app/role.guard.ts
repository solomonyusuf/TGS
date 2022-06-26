import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { findIndex } from 'rxjs/operators';
import { AuthorizeService } from '../api-authorization/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  basic: any;
  payLoad: any;
  inRole: boolean;
  constructor(private router: Router, private service: AuthorizeService, private http: HttpClient) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let roles = next.data['roles'] as Array<string>;
    this.service.getUser()
      .subscribe(token => {
        console.log(token);
        this.http.get(`api/Authentication/${token['sub']}`).subscribe(res => {
          this.payLoad = `${res['role']}`;
          console.log(res);

          var userRole = this.payLoad;
          if (userRole == roles) {
            return true;
          }
          else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        })

      })


    return true;
  }


}
