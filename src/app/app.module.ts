import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyhallsComponent } from './ownerModule/components/myhalls/myhalls.component';
import { CalendarComponent } from './ownerModule/components/calendar/calendar.component';
import { ProfileComponent } from './ownerModule/components/profile/profile.component';
import { SettingsComponent } from './ownerModule/components/settings/settings.component';
import { OwnerLoginComponent } from './ownerModule/components/owner-login/owner-login.component';
import { OwnerRegisterComponent } from './ownerModule/components/owner-register/owner-register.component';
import { CustomerdataComponent } from './ownerModule/components/customerdata/customerdata.component';
import { EarningsComponent } from './ownerModule/components/earnings/earnings.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OwnerDashboardComponent } from './ownerModule/components/owner-dashboard/owner-dashboard.component';
import { AddserviceComponent } from './ownerModule/components/addservice/addservice.component';
import { ListyourvenueComponent } from './ownerModule/components/listyourvenue/listyourvenue.component';
import { UserRegisterComponent } from './userModule/components/user-register/user-register.component';
import { UserHelpComponent } from './userModule/components/user-help/user-help.component';

import { RecentbookingsComponent } from './ownerModule/components/recentbookings/recentbookings.component';
import { CarouselComponent } from './userModule/components/carousel/carousel.component';
import { EventsOrganizingComponent } from './userModule/components/events-organizing/events-organizing.component';
import { FooterComponent } from './userModule/components/footer/footer.component';
import { FunctionhallComponent } from './userModule/components/functionhall/functionhall.component';
import { FunctionhallpageComponent } from './userModule/components/functionhallpage/functionhallpage.component';
import { GardensComponent } from './userModule/components/gardens/gardens.component';
import { HeaderComponent } from './userModule/components/header/header.component';
import { HomeComponent } from './userModule/components/home/home.component';
import { HotelsComponent } from './userModule/components/hotels/hotels.component';
import { OwnerHelpComponent } from './userModule/components/owner-help/owner-help.component';
import { PaygateComponent } from './userModule/components/paygate/paygate.component';
import { RegionalWeddingComponent } from './userModule/components/regional-wedding/regional-wedding.component';
import { ServiceOrganizingComponent } from './userModule/components/service-organizing/service-organizing.component';
import { UserLoginComponent } from './userModule/components/user-login/user-login.component';
import { SearchbarService } from './userModule/services/searchbar.service';
import { BookingsComponent } from './ownerModule/components/bookings/bookings.component';
import { ActiveComponent } from './ownerModule/components/active/active.component';
import { BookComponent } from './ownerModule/components/book/book.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FunctionhallComponent,
    UserLoginComponent,
    FunctionhallpageComponent,
    UserRegisterComponent,
    PaygateComponent,
    OwnerDashboardComponent,
    MyhallsComponent,
    CalendarComponent,
    ProfileComponent,
    SettingsComponent,
    OwnerLoginComponent,
    OwnerRegisterComponent,
    CustomerdataComponent,
    BookingsComponent,
    EarningsComponent,
    ActiveComponent,
    BookComponent,
    RecentbookingsComponent,
    GardensComponent,
    RegionalWeddingComponent,
    CarouselComponent,
    HotelsComponent,
    EventsOrganizingComponent,
    ServiceOrganizingComponent,
    FooterComponent,
    HomeComponent,
    AddserviceComponent,
    OwnerHelpComponent,
    UserHelpComponent,
    ListyourvenueComponent



  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgApexchartsModule

  ],
  providers: [SearchbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
