import { Stock } from './../../Entityclass/stock';
import { StockService } from 'src/app/services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deletestock',
  templateUrl: './deletestock.component.html',
  styleUrls: ['./deletestock.component.css']
})
export class DeletestockComponent implements OnInit {

  constructor(private service:StockService,private router:Router) { }
  stock:Stock[]=[];
  stk:Stock=new Stock();

  deletestock(stock:String):void
  {
    this.service.deletestock(this.stk.stock).subscribe(
      data=>
      {
        alert("stock deleted");
        this.stock= this.stock.filter(e=>e!==this.stk);
        //this.router.navigateByUrl("delete");
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
