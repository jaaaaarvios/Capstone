import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post("http://localhost:3000/CredentialDB/login", data)
  }

  deleteTechnician(_id): Observable<any> {
    return this.http.delete<void>("http://localhost:3000/technician/:id", _id)
  }

  updateTechnician(data) {
    return this.http.patch("http://localhost:3000/technician/:id", data)
  }

  getOne(_id) {
    return this.http.get("http://localhost:3000/NewServiceRequest/"+ _id).pipe(map((res: any) => res));
  }
  deleteOne(_id) {
    return this.http.delete("http://localhost:3000/NewServiceRequest/"+ _id).pipe(map((res: any) => res));
  }

  getTechnician(_id) {
    return this.http.get("http://localhost:3000/technician/"+ _id).pipe(map((res: any) => res));
  }
}
