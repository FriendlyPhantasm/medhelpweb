import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralsListComponent } from './referrals-list/referrals-list.component';
import { LogoutComponent } from './logout/logout.component';
import { ReferralInformationComponent} from './referral-information/referral-information.component';

const routes: Routes = [
	{
		path:'referrals-list',
		component:ReferralsListComponent
	},
	{
		path:'logout',
		component:LogoutComponent
	},
  {
    path:'referral-information',
    component: ReferralInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
