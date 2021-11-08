import { company } from './../../Entityclass/company';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor(private cmpservice:CompanyService,private router:Router) { }
  cmp:company=new company();
  public msg="";
  addcmp(){
    this.cmpservice.addcomp(this.cmp).subscribe(d=>
      {
        //this.stock=d;
        this.msg="company Added";
        alert("company Added");
        this.router.navigateByUrl("/addcmp");
        //window.location.reload();
        
      },
      err=>
      {
        alert(err.error);
      })

  }

  ngOnInit(): void {
  }
}
