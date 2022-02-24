import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import  productsList from 'src/app/_files/prod1.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private cartService:CartService) { }
  public productList:{"id":number,"type":string,"name":string,"price":number,"pic"?:string}[]=productsList;
  

  ngOnInit(): void {
  }

  addToCart(item:any){
    this.cartService.addToCart(item);

  }

}
