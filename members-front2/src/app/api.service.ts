import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:8000/";
  token = "Token 736dc70106a2be1aa0e0131a35927beba11e1c0e";
  httpHeaders = new HttpHeaders()//.set('Content-Type','application/json')
  .set('Authorization', this.token);
  constructor(private http: HttpClient) {}

   getAllMembers() : Observable<any>{
    return this.http.get(this.baseUrl+ 'members/',
    {headers:this.httpHeaders}
    );
  };

  getMember(id: string) : Observable<any>{
    return this.http.get(this.baseUrl+ 'members/'+id+"/",
    {headers:this.httpHeaders}
    );
  };

  saveNemMember(member: { name: string; surname: string; phone: string; }) : Observable<any>{
    return this.http.post(this.baseUrl+ 'members/', member,
    {headers:this.httpHeaders}
    );

  }
}
