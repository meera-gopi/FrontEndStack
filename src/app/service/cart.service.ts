import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem:any =[];

  public productList = new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");

  public amount !:any;

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(product:any){
    this.cartItem.push(...product);
    this.productList.next(product);

  }

  addToCart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotal();
    console.log(this.cartItem);
  }

  getTotal():number {
    let grandTotal=0;
    this.cartItem.map((a:any)=>{
      grandTotal += a.price;
    })

    return grandTotal;
  }

  deleteCartItem(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItem.splice(index,1);
      }
    })
    this.productList.next(this.cartItem);
  }

 setAmount(total:number){
   this.amount=total;
 }

 emptyCart(){
   this.cartItem=[];
   this.productList.next(this.cartItem);
 }


}
