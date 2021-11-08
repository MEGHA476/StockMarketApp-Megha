import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../Entityclass/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  addStock(stock:Stock):Observable<any>{
    let url="http://localhost:8032/stock/addStock";
    return this.http.post(url,stock,{responseType:'text'});
  }

  liststock():Observable<Stock[]>{
    let url="http://localhost:8032/stock/listall"
    return this.http.get<Stock[]>(url);
  }

  deletestock(stock:String):Observable<any>{
    let url="http://localhost:8032/stock/delete"
    return this.http.delete(url+"/"+stock);
  }
}
