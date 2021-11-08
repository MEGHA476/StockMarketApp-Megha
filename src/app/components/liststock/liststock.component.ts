import { StockService } from 'src/app/services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Entityclass/stock';

@Component({
  selector: 'app-liststock',
  templateUrl: './liststock.component.html',
  styleUrls: ['./liststock.component.css']
})
export class ListstockComponent implements OnInit {

  constructor(private service:StockService,private router:Router) { }
  stock:Stock[]=[];
  stk:Stock=new Stock();
  liststock(){

    this.service.liststock().subscribe(d=>
      {
        this.stock=d;
        this.router.navigateByUrl("liststock");

      },
      error=>{
        alert(error.error);
      }
      )

  }

  deletestock(stock:String):void
  {
    this.service.deletestock(stock).subscribe(
      data=>
      {
        alert("stock deleted");
        this.stock= this.stock.filter(e=>e!==this.stk);
        window.location.reload();
      },
      err =>
      {
        window.location.reload();
      }

    )
  }

  ngOnInit(): void {
  }
 submitted=false;
 onSubmit()
 {
   this.submitted=true;
 }
   

}
