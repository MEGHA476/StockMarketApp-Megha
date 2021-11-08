
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Entityclass/stock';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  constructor(private stockservice:StockService,private router:Router) { }
  stock:Stock=new Stock();
  public msg="";
  addStock(){
    this.stockservice.addStock(this.stock).subscribe(d=>
      {
        //this.stock=d;
        this.msg="Stock Added";
        alert("stock Added");
        this.router.navigateByUrl("/addStock");
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
