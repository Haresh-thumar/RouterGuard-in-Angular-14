import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*============= Custom Component =============*/
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';

/*============= Custom Guard =============*/
import { ActivateGuard } from './authGuard/activate.guard';
import { DeactivateGuard } from './authGuard/deactivate.guard';
import { UserDataComponent } from './user/user-data/user-data.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { ActivateChildGuard } from './authGuard/activate-child.guard';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserDownloadComponent } from './user/user-download/user-download.component';
import { UserFileComponent } from './user/user-file/user-file.component';
import { UserImgComponent } from './user/user-img/user-img.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ActivateGuard] },
  { path: 'student', component: StudentComponent },
  { path: 'merchant', component: MerchantComponent, canDeactivate: [DeactivateGuard] },
  {
    path: 'user',
    component: UserComponent,
    canActivateChild: [ActivateChildGuard],
    children: [
      { path: '', redirectTo: 'userData', pathMatch: 'full' },
      { path: 'userData/:id', component: UserDataComponent },
      { path: 'userTable/:id', component: UserTableComponent },
      { path: 'userDetail/:id', component: UserDetailComponent },
      { path: 'userDownload/:id', component: UserDownloadComponent },
      { path: 'userFile/:id', component: UserFileComponent },
      { path: 'userImg/:id', component: UserImgComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
