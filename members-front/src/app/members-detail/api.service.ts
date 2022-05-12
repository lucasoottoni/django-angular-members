import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:8000/";
  token = "Token 736dc70106a2be1aa0e0131a35927beba11e1c0e";
  httpHeaders = new HttpHeaders()//.set('Content-Type','application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id: string) : Observable<any>{
    return this.http.get(this.baseUrl+ 'members/'+id+"/",
    {headers:this.httpHeaders}
    );
  }
  updateMember(member: { id: any; name?: string; surname?: string;  phone?:string;},
    image2: File) : Observable<any>{
    console.log("Método update member do serviço");
    //console.log("Image 2: ", image2);
    //const imagem = new FormData();
    //imagem.append('image2', image2,image2.name)
  
    //let body = {name: member.name, surname: member.surname, phone: member.phone,
    //image2: [imagem.get('image2'), image2.name]};

    const uploadData = new FormData();
    uploadData.append('name', member.name!);
    uploadData.append('surname', member.surname!);
    uploadData.append('phone', member.phone!);
    uploadData.append('image2', image2!, image2.name);

    return this.http.put(this.baseUrl+ 'members/'+member.id+"/", uploadData,
    {headers:this.httpHeaders}
    );
  }
  deleteMember(id: number | undefined) : Observable<any>{
    return this.http.delete(this.baseUrl+ 'members/'+id+"/",
    {headers:this.httpHeaders}
    );
  }
}