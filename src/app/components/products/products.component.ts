import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  totalPrice: number = 0;
  products: Product[] = [];
  showProductDetail: boolean = false;
  productChoosen: Product = {
    id: 1,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    images: ['https://www.m2crowd.com/core/i/placeholder.png'],
  }
  constructor(private storeServices: StoreService, private productsServices: ProductsService) {
    this.myShoppingCart = this.storeServices.getShoppingCart()
  }

  ngOnInit(): void {
    this.productsServices.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }

  addProduct(product: Product) {
    this.storeServices.addProduct(product)
    this.totalPrice = this.storeServices.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    console.log(id)
    this.productsServices.getProductById(id)
      .subscribe(prod => {
        this.productChoosen = prod;
        this.toggleProductDetail();
        console.log(prod);
      });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo Producto',
      description: '',
      images: [''],
      price: 100,
      categoryId: 125
    }
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'Nuevo titulo'
    }
    const id = this.productChoosen.id;
    this.productsServices.updateProduct(id, changes)
      .subscribe(data => {
        console.log(data)
      })
  }

  deleteProduct(){
    const id = this.productChoosen.id;
    this.productsServices.deteleProduct(id)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChoosen.id);
        this.products.splice(productIndex);
        this.showProductDetail = false;
      })
  }

}
