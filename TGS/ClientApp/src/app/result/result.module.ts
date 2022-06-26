import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuniourResultComponent } from './juniour-result/juniour-result.component';
import { SeniourResultComponent } from './seniour-result/seniour-result.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JuniourResultComponent, SeniourResultComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'juniour/result', component: JuniourResultComponent },
      { path: 'seniour/result', component: SeniourResultComponent },
     
    ])
  ],
  exports: [JuniourResultComponent, SeniourResultComponent],
})
export class ResultModule { }
