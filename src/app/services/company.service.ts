import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../Entityclass/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http:HttpClient) { }

  addcomp(cmp:company):Observable<any>{
    let url="http://localhost:8032/company/addcomp";
    return this.http.post(url,cmp,{responseType:'text'});
  }

  updatecompany(cmp:company):Observable<any>{
    let url="http://localhost:8032/company/updatecomp"
    return this.http.post(url,cmp,{responseType:'text'})
  }

  deletecmp(id:number):Observable<any>{
    let url="http://localhost:8032/company/delete"
    return this.http.delete(url+"/"+id);
  }

  listcmp():Observable<company[]>{
    let url="http://localhost:8032/company/list"
    return this.http.get<company[]>(url);
  }
}
