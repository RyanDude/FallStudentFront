import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class IpServicService {

  constructor(private http:HttpClient) { }
  getClientIPAddress() {
    return this.http
      .get<any>('https://api.ipify.org/?format=json',{observe: 'response'});
  }
}
