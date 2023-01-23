import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  createProduct(product: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
  }

  deteleProduct(id: number) {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`)
  }
}
