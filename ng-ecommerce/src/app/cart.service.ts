import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product) {
    return this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(productName) {
    this.items = this.items.filter((itemsProduct) => {
      return  itemsProduct.name !== productName
    });
    return this.items;
  }

  clearCart() {
    return this.items = [];
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }

}