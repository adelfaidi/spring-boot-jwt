import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = '/api/test';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.API + '/user', { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.API + '/pm', { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.API + '/admin', { responseType: 'text' });
  }
}
