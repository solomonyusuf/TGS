import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './root/nav-menu/nav-menu.component';
import { HomeComponent } from './root/home/home.component';
import { CounterComponent } from './root/counter/counter.component';
import { FetchDataComponent } from './root/fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { AdminModule } from './admin/admin.module';
import { ResultModule } from './result/result.module';
import { StudentModule } from './student/student.module';
import { ContactComponent } from './root/Contact/contact.component';
import { RoleGuard } from './role.guard';
import {  ForbiddenComponent } from './root/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ContactComponent,
    ForbiddenComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    ResultModule,
    StudentModule,

    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' , },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [RoleGuard], data: {roles:'Admin'} },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
