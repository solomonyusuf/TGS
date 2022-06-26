import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'adminresult',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css']
})
export class AdminResultComponent implements OnInit {
  results: any;
    value: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAll();
   
  }

  public getAll() {
    this.http.get(`api/Result`).subscribe(res => {
      this.results = res;
      console.log(res);
    
    })
  }
  public Delete(id) {
    if (window.confirm("are you sure you want to delete this ?")) {
      this.http.delete(`api/Result/${id}`).subscribe(res => {
        this.getAll();
        console.log(res);
      })
    } else {
      this.getAll();
    }
  }

  public result(res) {
    return `${res.resultId}`;
  }

  public search() {
    if (this.value == "") {
      this.getAll();
    } else {
      this.results = this.results.filter(res => {
        return this.result(res).toLocaleLowerCase().match(this.value.toLocaleLowerCase());
      })
    }
  }
}






