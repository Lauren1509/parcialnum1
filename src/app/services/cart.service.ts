import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  addToCart(product: any){
    this.cartItems.push(product);
  }

  removeFromCart(productId: number){
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  getCartItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
  }
}
