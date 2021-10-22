import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data):Observable<any>{
    return this.http.post("http://localhost:3000/CredentialDB/login", data)
  }

  deleteTechnician(_id): Observable<any>{
    return this.http.delete<void>("http://localhost:3000/technician/:id", _id)
  }

  updateTechnician(data){
    return this.http.patch("http://localhost:3000/technician/:id", data)
  }

}
