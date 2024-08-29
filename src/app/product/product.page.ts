import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
addToCart() {
throw new Error('Method not implemented.');
}

  product: any;

  constructor(private route: ActivatedRoute, 
    private apiservice: ApiService,
    private cartService: CartService,
    private toastController: ToastController) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiservice.getProductById(id).subscribe(product => {
      this.product = product;
    });

    addToCart(){
      this.cartService.addToCart(this.product);
      this.presentToast('Product added suscessfully');
    }

    async presentToast(message: string){
      const toast = await this.toastController.create({
        message, duration: 2000
      });
      toast.present();
    }
  }

}
