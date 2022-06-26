import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'viewresult/:id',
  templateUrl: './viewresult.component.html'
})
export class ViewResultComponent implements OnInit {
  id: any;
  detail$: Observable<any>;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.detail$ = this.http.get(`api/Student/${this.id}`);

  }


}
