import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private UrlBase = 'https://swapi.dev/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(`${this.UrlBase}/products`);
  }
  
  getAllCategories(): Observable<any>{
    return this.http.get(`${this.UrlBase}/categories`);
  }

  getProductsByCategory(category: string): Observable<any>{
    return this.http.get(`${this.UrlBase}/products/category/${category}`);
  }

  getProductById(id: number): Observable<any>{
    return this.http.get(`${this.UrlBase}/products/${id}`);
  }
}
