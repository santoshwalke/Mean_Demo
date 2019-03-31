import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    statusChange = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  signin(username: string, password: string) {
        const baseUrl = environment.baseUrl;

        this.httpClient.post(baseUrl + '/api/login', {
            username,
            password
        }).subscribe((data: {message: string}) => {
            this.statusChange.next(data.message);
        });
    }
}
