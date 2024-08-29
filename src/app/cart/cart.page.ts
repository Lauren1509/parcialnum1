import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  cartItems: any[] = [];

  constructor(private cartService: CartService,
    private toastController: ToastController){
      this.loadCartItems();
  }

  loadCartItems(){
    this.cartItems = this.cartItems.getCartItems();
  }

  removeFromCart(productId: number){
    this.cartService.removeFromCart(productId);
    this.loadCartItems();
    this.presentToast('Product delete from cart');
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message, duration: 2000
    });
    toast.present();
  }

  clearCart(){
    this.cartService.clearCart();
    this.loadCartItems();
    this.presentToast('Cart empty');
  }

  simulatePayment(){
    this.presentToast('Pay sucessfully');
    this.clearCart();
  }
}
