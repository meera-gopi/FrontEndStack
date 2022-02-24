import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public amount !:any;

  public payment = false;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
 this.amount = this.cartService.getTotal();

  }

  deleteCart(){
    this.cartService.emptyCart();
  }

  setPayment(){
    this.payment=true;
    this.deleteCart();
  }

  


}
