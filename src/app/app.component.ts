import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store-shopping-cart';
  register = {
    name: '',
    email: '',
    password: ''
  }
  
  onRegister() {
    console.log('first')
  }

  onLoaded() {
    console.log('Llego del hijo')
  }
}
