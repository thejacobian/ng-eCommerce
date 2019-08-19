import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Output, EventEmitter } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // @Output() buy = new EventEmitter();

  addToCart(product) {
    window.alert('The product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  removeFromCart(productName) {
    window.alert('The product has been removed from the cart!');
    this.cartService.removeFromCart(productName);
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}