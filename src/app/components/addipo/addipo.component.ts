import { IpoService } from './../../services/ipo.service';
import { ipo } from './../../Entityclass/ipo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {

  constructor(private ipservice:IpoService,private router:Router) { }
  ip:ipo=new ipo();
  public msg="";
  addipo(){
    this.ipservice.addipo(this.ip).subscribe(d=>
      {
        //this.stock=d;
        this.msg="Stock Added";
        alert("ipo Added");
        this.router.navigateByUrl("/addipo");
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
