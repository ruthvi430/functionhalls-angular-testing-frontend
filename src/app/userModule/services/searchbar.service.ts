import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import{ environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  private API_URL= environment;
  constructor(private http: HttpClient) { }
  getAllFunctionHalls():Observable<any>
  {
    return this.http.get(this.API_URL+'/api/functionhalls');
  }
  
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get(this.API_URL+'/api/functionhalls/?city='+city);
  }
 
}

