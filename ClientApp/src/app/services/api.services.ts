import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
        constructor(
                private _http: HttpClient
        ) { }


        getBugs() {
                return this._http.get("http://localhost:3000/bugs");
        }

        updateBug(data: any) {
                return this._http.put(`http://localhost:3000/bugs/${data.id}`, data);
        }

        addBug(data: any) {
                return this._http.post(`http://localhost:3000/bugs`, data);
        }

        deleteBug(id: number) {
                return this._http.delete(`http://localhost:3000/bugs/${id}`);

        }
        getBugById(id: number){
                return this._http.get(`http://localhost:3000/bugs/${id}`);
                
        }


}