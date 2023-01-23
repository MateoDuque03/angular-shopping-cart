import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 1,
    title: '',
    price: 200,
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    images: ['https://www.m2crowd.com/core/i/placeholder.png'],
  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<number>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

  onShowDetail() {
    this.showDetail.emit(this.product.id)
  }
}
