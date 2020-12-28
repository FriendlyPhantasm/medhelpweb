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
    path:'referral-information/:id',
    component: ReferralInformationComponent
  },
  {
		path:'logout',
		component:LogoutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
