import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = JSON.parse(localStorage.getItem('token'));

  login(data): Observable<any> {
    return this.http.post("http://localhost:3000/CredentialDB/login", data)
  }

  admin(data): Observable<any> {
    return this.http.post("http://localhost:3000/CredentialDB/admin", data)
  }

  deleteTechnician(_id) {
    return this.http.delete("http://localhost:3000/technician/"+ _id).pipe(map((res: any) => res));
  }

  deleteRequest(_id) {
    return this.http.delete("http://localhost:3000/NewServiceRequest/"+ _id).pipe(map((res: any) => res));
  }

  getTechnician(_id) {
    return this.http.get("http://localhost:3000/technician/"+ _id).pipe(map((res: any) => res));
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
 }
}
