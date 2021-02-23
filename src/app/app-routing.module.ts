import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MyhallsComponent } from './ownerModule/components/myhalls/myhalls.component';
import { ProfileComponent } from './ownerModule/components/profile/profile.component';
import { CalendarComponent } from './ownerModule/components/calendar/calendar.component';
import { SettingsComponent } from './ownerModule/components/settings/settings.component';
import { OwnerRegisterComponent } from './ownerModule/components/owner-register/owner-register.component';
import { OwnerLoginComponent } from './ownerModule/components/owner-login/owner-login.component';
import { CustomerdataComponent } from './ownerModule/components/customerdata/customerdata.component';
import { EarningsComponent } from './ownerModule/components/earnings/earnings.component';
import { OwnerDashboardComponent } from './ownerModule/components/owner-dashboard/owner-dashboard.component';
import { AddserviceComponent } from './ownerModule/components/addservice/addservice.component';
import { ListyourvenueComponent } from './ownerModule/components/listyourvenue/listyourvenue.component';

import { RecentbookingsComponent } from './ownerModule/components/recentbookings/recentbookings.component';
import { FunctionhallComponent } from './userModule/components/functionhall/functionhall.component';
import { HeaderComponent } from './userModule/components/header/header.component';
import { OwnerHelpComponent } from './userModule/components/owner-help/owner-help.component';
import { PaygateComponent } from './userModule/components/paygate/paygate.component';
import { UserHelpComponent } from './userModule/components/user-help/user-help.component';

import { BookingsComponent } from './ownerModule/components/bookings/bookings.component';
import { ActiveComponent } from './ownerModule/components/active/active.component';
import { BookComponent } from './ownerModule/components/book/book.component';
import { UserRegisterComponent } from './userModule/components/user-register/user-register.component';
import { UserLoginComponent } from './userModule/components/user-login/user-login.component';
import { FunctionhallpageComponent } from './userModule/components/functionhallpage/functionhallpage.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component:UserRegisterComponent},
  { path:'user-help', component:UserHelpComponent },
  { path: 'owner-register', component: OwnerRegisterComponent },
  { path: 'owner-login', component: OwnerLoginComponent },
  { path:'owner-help', component:OwnerHelpComponent },
  { path: 'owner-dashboard', component: OwnerDashboardComponent },
  { path: 'myhalls', component: MyhallsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'functionhall', component: FunctionhallComponent },
  { path: 'functionhallpage/:id', component: FunctionhallpageComponent },
  { path: 'paygate/:id', component: PaygateComponent },
  { path: 'customerdata', component: CustomerdataComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'book', component: BookComponent },
  { path: 'recentbookings', component: RecentbookingsComponent },
  { path: 'listyourvenue', component:ListyourvenueComponent},
  { path: 'addservice', component:AddserviceComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router) {}
  ngOnInit() {
  this.router.navigate([''])
}
}