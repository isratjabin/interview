import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: 'https://www.anasource.com/team4/dummy_api/api/signup';

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post<any>(this.registerUrl, userData);
  }
}
