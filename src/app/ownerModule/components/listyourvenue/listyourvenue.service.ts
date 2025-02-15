import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { PublishListingModel } from '../../models/publishlisting.model';

@Injectable({
  providedIn: 'root'
})
export class ListyourvenueService {
  private API_URL = environment;
  constructor(  private _http: HttpClient ) { }

  // Location Services   

  getCountry(country): Observable<any> {
    return this._http.get(this.API_URL+"/api/state/details?country="+country);
  }
  getStates(country): Observable<any> {
    return this._http.get(this.API_URL+"/api/state/details?country="+country);
  }
  getCity(city): Observable<any> {
    return this._http.get(this.API_URL+"/api/city/details?state="+city);
  }

  //   photos service

  public postFile(file):Observable<any> {
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('Content-Type', 'multipart/form-data');
  return this._http.post<any>(this.API_URL+'/api/image/', file, { headers: httpHeaders });
  }

  //   Acccount Details Services
  getBanks(): Observable<any>{
    return this._http.get(this.API_URL+"/api/banks");
  }
  getBranches(bank): Observable<any>{
    return this._http.get(this.API_URL+"/api/branches?bank="+bank);

  }
  getBranchIfsc(bankname,branch): Observable<any>{
    const opts = { params: new HttpParams({fromString: "bankname="+bankname+"&"+"branch="+branch}) };
    return this._http.get(this.API_URL+"/api/bankdetails/",opts);
    
  }
  // security service
public addmobileNumber(mobilenumber,req:any): Observable<any>{
  return this._http.post<any>(this.API_URL+'/api/user/verification?mobileNumber='+mobilenumber, req);
}



//   publish listing service

baseUrl = this.API_URL+'/api/publishListing'; 

pubList(PublishDetails:PublishListingModel): Observable<PublishListingModel> {
var data={PublishDetails:PublishDetails};

console.log(data);
return this._http.post<PublishListingModel>(this.baseUrl, PublishDetails, {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
})
}

}
