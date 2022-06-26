import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentComponent } from './all-student/all-student.component';
import { RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [AllStudentComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'studentdetails/:id', component: StudentDetailsComponent },

    ])
  ],
  exports: [AllStudentComponent],
})
export class StudentModule { }
