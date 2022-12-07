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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'student', component: StudentComponent, canActivate: [ActivateGuard] },
  { path: 'merchant', component: MerchantComponent, canDeactivate: [DeactivateGuard] },
  { path: 'user', component: UserComponent },
  { path: '**', component: ErrorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
