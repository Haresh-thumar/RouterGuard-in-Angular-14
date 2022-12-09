import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

/*--------------- Angular Material Module ---------------*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/*--------------- Angular Guards & Services ---------------*/
import { AuthServiceService } from './services/auth-service.service';
import { ActivateGuard } from './authGuard/activate.guard';
import { DeactivateGuard } from './authGuard/deactivate.guard';
import { HttpClientModule } from '@angular/common/http';
import { ActivateChildGuard } from './authGuard/activate-child.guard';
import { UserDataComponent } from './user/user-data/user-data.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserFileComponent } from './user/user-file/user-file.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserImgComponent } from './user/user-img/user-img.component';
import { UserDownloadComponent } from './user/user-download/user-download.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    MerchantComponent,
    ErrorComponent,
    UserComponent,
    UserDataComponent,
    UserTableComponent,
    UserFileComponent,
    UserDetailComponent,
    UserImgComponent,
    UserDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule, MatIconModule, MatButtonModule
  ],
  providers: [AuthServiceService, ActivateGuard, DeactivateGuard, ActivateChildGuard, UsersService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
