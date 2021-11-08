import { company } from './../../Entityclass/company';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletecmp',
  templateUrl: './deletecmp.component.html',
  styleUrls: ['./deletecmp.component.css']
})
export class DeletecmpComponent implements OnInit {

  constructor(private service:CompanyService,private router:Router) { }
  cmp:company[]=[];
  comp:company=new company();
  

  deletecmp(id:number):void
  {
    this.service.deletecmp(this.comp.id).subscribe(
      data=>
      {
        alert("company deleted");
        this.cmp= this.cmp.filter(e=>e!==this.comp);
        this.router.navigateByUrl("deletecmp");
      },
      err =>
      {
        alert(err.error);
        
        console.log("error",err.error);
      }

    )
  }

  ngOnInit(): void {
  }

}
