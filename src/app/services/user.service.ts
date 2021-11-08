import { user } from './../Entityclass/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user1:user):Observable<any>{
    let url="http://localhost:8032/user/register";
    return this.http.post(url,user1,{responseType:'text'});
  }

  deleteuser(user1:user):Observable<any>{
    let url="http://localhost:8032/user/delete"
    return this.http.delete(url+"/"+user1);
  }

  login(username:String,password:String):Observable<any>{
    let url="http://localhost:8032/user/login";
    return this.http.get(url+"/"+username+"/"+password,{responseType:'text'});
  }
  
  setuser(user1:user):Observable<any>{
    let url="http://localhost:8032/user/setuserapi2";
    return this.http.post(url,user1,{responseType:'text'});
  }

}
