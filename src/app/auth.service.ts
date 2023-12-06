import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'AIzaSyCq_xw1sOdESUbSPbfuIGsAtcMg_OrsLJw';

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  signin(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, userData);
  }
}
