import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import Constants from "../constants";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStates() :Observable<Object>{
    return this.http.get(`${Constants.BASE_URL}/countytest/states`)
  }
  getDetails(url: string) :Observable<Object>{
    return this.http.get(url)
  }
}
