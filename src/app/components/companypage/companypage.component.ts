import { company } from './../../Entityclass/company';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css']
})
export class CompanypageComponent implements OnInit {
  submitted: boolean | undefined;

  constructor(private service:CompanyService,private router:Router) { }
  cmp:company[]=[];
  comp:company=new company();
  

  deletecmp(id:number)
  {
    this.service.deletecmp(id).subscribe(
      data=>
      {
        alert("company deleted");
        this.cmp= this.cmp.filter(e=>e!==this.comp);
        this.router.navigateByUrl("deletecmp");
      },
      err =>
      {

        window.location.reload();
      //  alert(err.error);
      //   console.log("error",err.error);
      }

    )
  }
  getcmp(){
    this.service.listcmp().subscribe(d=>
      {
        this.cmp=d;
      },
      err=>
    {
      alert(err.error)
      
      
    });

  }
  onSubmit()
  {
    this.submitted=true;
  }
  ngOnInit(): void {
  }

}
