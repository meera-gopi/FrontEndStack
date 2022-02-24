import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products:any =[];
  public grandTotal !:number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(sub=>{
      this.products = sub;
      this.grandTotal=this.cartService.getTotal();
    })


  }

  deleteCartItem(item:any){
    this.cartService.deleteCartItem(item);
  }

  setAmount(total:number){
    this.cartService.setAmount(total);
  }



}
