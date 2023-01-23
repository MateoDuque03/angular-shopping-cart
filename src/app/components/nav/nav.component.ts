import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu: boolean = false;
  cartCounter: number = 0;
  constructor(private storeServices: StoreService) { }

  ngOnInit(): void {
    this.storeServices.myCounterCart$.subscribe(val => {
      this.cartCounter = val
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
