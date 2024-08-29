import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  selectedCategory: string= '';

  constructor(private apiService: ApiService, 
    private CartService: CartService, 
    private toastController: ToastController) { }

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(){
    this.apiService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

    loadProducts(){
      this.apiService.getAllProducts().subscribe(products => {
        this.products = products;
      });
    }

    filterProducts(){
      if (this.selectedCategory){
        this.apiService.getProductsByCategory(this.selectedCategory).subscribe(products => {
          this.products = products;
        });
      } else {
        this.loadProducts();
      }
    }

    addToCart(product: any){
      this.CartService.addToCart(product);
      this.presentToast('Product added sucessfully');
    }

    async presentToast(message: string){
      const toast = await this.toastController.create({
        message, duration: 2000
      });
      toast.present();
    }
}

