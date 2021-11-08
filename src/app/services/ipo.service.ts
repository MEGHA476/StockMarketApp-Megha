import { ipo } from './../Entityclass/ipo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  constructor(private http:HttpClient) { }

  addipo(ip:ipo):Observable<any>{
    let url="http://localhost:8032/ipo/addipo";
    return this.http.post(url,ip,{responseType:'text'});
  }
}
