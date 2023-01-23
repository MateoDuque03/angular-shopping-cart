import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  private myCartCounter = new BehaviorSubject<number>(0);

  myCart$ = this.myCart.asObservable();
  myCounterCart$ = this.myCartCounter.asObservable();
  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
    this.myCartCounter.next(this.myShoppingCart.length)
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((prev, current) => current.price + prev, 0)
  }

  getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }
}
