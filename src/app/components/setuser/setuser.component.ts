import { user } from './../../Entityclass/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setuser',
  templateUrl: './setuser.component.html',
  styleUrls: ['./setuser.component.css']
})
export class SetuserComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
  user1:user[]=[];
  usr:user=new user();
  public msg="";
  setuser(){
    
    this.service.setuser(this.usr).subscribe(d=>
      { if(this.usr.confirmed=true){
        //this.stock=d;
        this.msg="Email sent";
        //alert("stock Added");
        this.router.navigateByUrl("/login");
        //window.location.reload();
        
      }},
      err=>
      {
        alert(err.error);
      })

  }

  ngOnInit(): void {
  }

}
