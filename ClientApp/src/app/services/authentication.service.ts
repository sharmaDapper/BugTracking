import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class AuthenticationService {
    constructor(
          private _http: HttpClient
    ) { }

    logoutUser(){
        localStorage.removeItem("currentUser");
    }
}