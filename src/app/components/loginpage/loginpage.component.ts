import { UserService } from './../../services/user.service';
import { user } from './../../Entityclass/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router ,private service:UserService) { }

  user1:user[]=[];
  usr:user=new user();
  username:string|any;
  password:string|any;
  public msg="";
  Login(){
    this.service.login(this.username,this.password).subscribe(d=>
      {
          alert("Welcome");
          this.router.navigate(["/homepage"]);
          
        },
      err=>
      {
        alert(err.error);
        console.log(err)
      })

  }

  ngOnInit(): void {
  }

}
