import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { SignUpInfo } from './sigup-info';
import { AuthLoginInfo } from './login-info';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private API = '/api/authenticate';

    constructor(private http: HttpClient) {
    }

    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.API + '/signin', credentials, httpOptions);
    }

    signUp(info: SignUpInfo): Observable<string> {
        return this.http.post<string>(this.API + '/signup', info, httpOptions);
    }
}
