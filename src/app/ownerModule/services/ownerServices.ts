import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { PublishListingModel } from '../models/publishlisting.model';
import { OwnerLogin } from '../models/owner-login';
import { environment } from '../../../environments/environment';
import { profilemodel } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class ownerServices {
  private API_URL = environment;
  constructor(private _http: HttpClient) { }

  // coming -soon service

  postData(comingsoon: { email, password }): Observable<any> {

    return this._http.post(this.API_URL + '/api/homepage', comingsoon)
  }


  //   Owner Login Service
  sendotp(Ownerlogin: OwnerLogin): Observable<any> {
    console.log(Ownerlogin);
    return this._http.put(this.API_URL + '/api/login/verification', Ownerlogin);
  }

  //   Owner Register User
  registerUser(user): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this._http.post<any>(this.API_URL + '/api/ownerregistration', user, { headers: httpHeaders })
  }



  // Location Services   

  getCountry(country): Observable<any> {
    return this._http.get(this.API_URL + "/api/state/details?country=" + country);
  }
  getStates(country): Observable<any> {
    return this._http.get(this.API_URL + "/api/state/details?country=" + country);
  }
  getCity(city): Observable<any> {
    return this._http.get(this.API_URL + "/api/city/details?state=" + city);

  }



  //   Acccount Details Services
  getBanks(): Observable<any> {
    return this._http.get(this.API_URL + "/api/banks");
  }
  getBranches(bank): Observable<any> {
    return this._http.get(this.API_URL + "/api/branches?bank=" + bank);

  }
  getBranchIfsc(bankname, branch): Observable<any> {
    const opts = { params: new HttpParams({ fromString: "bankname=" + bankname + "&" + "branch=" + branch }) };
    return this._http.get(this.API_URL + "/api/bankdetails/", opts);

  }

  //   photos service

  public postFile(file): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'multipart/form-data');
    return this._http.post<any>(this.API_URL + '/api/image/', file, { headers: httpHeaders });
  }


  // security service
  public addmobileNumber(mobilenumber, req: any): Observable<any> {
    return this._http.post<any>(this.API_URL + '/api/user/verification?mobileNumber=' + mobilenumber, req);
  }



  //   publish listing service

  baseUrl = this.API_URL + '/api/publishListing';

  pubList(PublishDetails: PublishListingModel): Observable<PublishListingModel> {
    var data = { PublishDetails: PublishDetails };

    console.log(data);
    return this._http.post<PublishListingModel>(this.baseUrl, PublishDetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }


  // BookingService

  getBooking(): Observable<any> {
    return this._http.get(this.API_URL + "/api/recentlybooked?ownerId=kumar");

  }


  // MyprofileService

  getprofile(): Observable<any> {
    return this._http.get(this.API_URL + "/api/Allowners?user_Id=yaswanth3b3");
  }

  updateprofile(input): Observable<any> {
    return this._http.put<profilemodel>(this.API_URL + "/api/updateOwner?id=" + input.user_Id, input);
  }



  // RecentService


  getRecentbookings(): Observable<any> {
    return this._http.get(this.API_URL + "/api/recentlybooked?ownerId=kumar");
  }


  // My Halls Service
  getMyhalls(): Observable<any> {
    return this._http.get(this.API_URL + '/api/functionhall/?ownerId=kumar');
  }


}

