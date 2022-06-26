import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddResultComponent } from './add-result/add-result.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { RouterModule } from '@angular/router';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ViewResultComponent } from './view-result/viewresult.component';
import { ResultDetailComponent } from './result-detail/resultdetail.component';
import { AdminUsersComponent } from './admin-users/adminusers.component';
import { ImgUploadComponent } from './upload/upload.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { AuthorizeGuard } from '../../api-authorization/authorize.guard';
import { RoleGuard } from '../role.guard';
import { EditUsersComponent } from './edit-users/editusers.component';
import { AddUserRoleComponent } from './add-user-role/add-user-role.component';
import { AdminRoleComponent } from './admin-role/admin-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { AddRoleComponent } from './add-role/add-role.component';




@NgModule({
  declarations: [AddStudentComponent, AddRoleComponent, EditRoleComponent, AddSubjectComponent, AdminRoleComponent, AddUserRoleComponent, EditUsersComponent, ImgUploadComponent, AdminUsersComponent, ResultDetailComponent, StudentDetailComponent, ViewResultComponent, AddResultComponent, SidebarComponent, AdminStudentComponent, AdminContactComponent, AdminResultComponent, EditResultComponent, EditStudentComponent, AdminDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularToastifyModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'addstudent', component: AddStudentComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'addresult/:id', component: AddResultComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'adminstudent', component: AdminStudentComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'adminusers', component: AdminUsersComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'adminresult', component: AdminResultComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'editresult/:id', component: EditResultComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'editstudent/:id', component: EditStudentComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'viewresult/:id', component: ViewResultComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'studentdetail/:id', component: StudentDetailComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'admincontact', component: AdminContactComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'admindetails/:id', component: AdminDetailsComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'resultdetail/:id', component: ResultDetailComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'sidebar', component: SidebarComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'upload', component: ImgUploadComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'editusers/:id', component: EditUsersComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'addsubject/:id', component: AddSubjectComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },

      { path: 'add/user/role/:name/:id', component: AddUserRoleComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'admin/role', component: AdminRoleComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'edit/role/:id', component: EditRoleComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },
      { path: 'add/role', component: AddRoleComponent, canActivate: [AuthorizeGuard, RoleGuard], data: { roles: 'Admin' } },

    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ToastService],
  exports: [AddStudentComponent, AddResultComponent, EditUsersComponent, AddSubjectComponent, AdminUsersComponent, ResultDetailComponent, ViewResultComponent, StudentDetailComponent, SidebarComponent, AdminDetailsComponent, AdminStudentComponent, AdminResultComponent, EditResultComponent, EditStudentComponent, AdminContactComponent,],
})
export class AdminModule { }
