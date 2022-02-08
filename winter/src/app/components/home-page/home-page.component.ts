import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductItem} from "../../models/product-item";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  productList: ProductItem[] = [];
  searchKey: string = '';
  loading = false;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._productService.getAllProduct().subscribe(response => {
      this.productList = response;
      console.log('response', response);
    }, err => {

    });
  }
}
