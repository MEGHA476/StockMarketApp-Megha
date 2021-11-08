import { sector } from './../Entityclass/sector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  constructor(private http:HttpClient) { }

  addsector(sect:sector):Observable<any>{
    let url="http://localhost:8032/sector/addsector";
    return this.http.post(url,sect,{responseType:'text'});
  }
}
