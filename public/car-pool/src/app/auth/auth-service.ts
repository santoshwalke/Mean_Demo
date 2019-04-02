import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    statusChange = new Subject<string>();
    status: string;
    userName: string;

  constructor(private httpClient: HttpClient) { }

  signin(username: string, password: string) {
        const baseUrl = environment.baseUrl;

        this.httpClient.post(`${baseUrl}/login`, {
            username,
            password
        }).subscribe((data: {message: string, userName: string}) => {
            this.status = data.message;
            this.userName = data.userName;
            this.statusChange.next(data.message);
        });
    }

    isAuthenticated() {
        return (this.status === 'failure' || this.status === undefined) ? false : true;
    }

    getUserName() {
        return this.userName;
    }

    logout() {
        this.status = undefined;
    }
}
