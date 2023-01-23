import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter();
  defaultImg: string = 'https://www.m2crowd.com/core/i/placeholder.png';
  constructor() { }

  ngOnInit(): void {
    console.log('constructor')
  }

  imgError(){
    this.img = this.defaultImg;
  }

  imgLoaded(){
    this.loaded.emit();
  }
}
