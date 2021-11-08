import { sector } from './../../Entityclass/sector';
import { SectorService } from './../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent implements OnInit {
  constructor(private sectservice:SectorService,private router:Router) { }
  sect:sector=new sector();
  public msg="";
  addsector(){
    this.sectservice.addsector(this.sect).subscribe(d=>
      {
        //this.stock=d;
        this.msg="sector Added";
        alert("sector Added");
        this.router.navigateByUrl("/addsector");
        window.location.reload();
        
      },
      err=>
      {
        alert(err.error);
      })

  }

  ngOnInit(): void {
  }
}
