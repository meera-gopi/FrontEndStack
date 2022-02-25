import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemsTotal !:any;
  public searchterm : string='';
  constructor(private cartService : CartService) { }

  ngOnInit(): void{ 
    this.cartService.getProducts().subscribe(res=>{

      this.cartItemsTotal=res.length;

    })
  }

  search(event : any){
    this.searchterm = event.target.value;
    //(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchterm);
    console.log(this.searchterm);
  }

}
