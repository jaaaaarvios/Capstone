import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
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
    return this.http.post("https://dhdev-ayosgamit.herokuapp.com/CredentialDB/login", data)
  }

  admin(data): Observable<any> {
    return this.http.post("https://dhdev-ayosgamit.herokuapp.com/CredentialDB/admin", data)
  }
  
  deleteTechnician(_id, httpOptions) {
    return this.http.delete("https://dhdev-ayosgamit.herokuapp.com/technician/"+ _id, httpOptions).pipe(map((res: any) => res));
  }

  deleteRequest(_id) {
    return this.http.delete("https://dhdev-ayosgamit.herokuapp.com/NewServiceRequest/"+ _id).pipe(map((res: any) => res));
  }

  getTechnician(_id) {
    return this.http.get("https://dhdev-ayosgamit.herokuapp.com/technician/"+ _id).pipe(map((res: any) => res));
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
 }
}
