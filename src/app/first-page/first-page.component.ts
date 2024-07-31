import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

interface IProduct {
  imgSource: string;
  name: string;
  price: number;
  model: string;
  onSale: boolean;
}
@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {
  x: string = 'Assma';
  srcImage: string = './assets/avataaars.svg';
  searchValue = '';
  products: IProduct[] = [
    {
      imgSource: './assets/avataaars.svg',
      name: 'avatar',
      price: 125,
      model: 'walo',
      onSale: true,
    },
    {
      imgSource: './assets/avataaars.svg',
      name: 'bghy',
      price: 110,
      model: 'bgh',
      onSale: false,
    },
    {
      imgSource: './assets/avataaars.svg',
      name: 'avathjuiar',
      price: 158,
      model: 'avathjuiar',
      onSale: true,
    },
    {
      imgSource: './assets/avataaars.svg',
      name: 'nhjk',
      price: 33,
      model: 'nhjk',
      onSale: false,
    },
    {
      imgSource: './assets/avataaars.svg',
      name: 'klpoiuy',
      price: 26,
      model: 'klpoiuy',
      onSale: true,
    }
  ];
  sayHi() {
    console.log(`hi ${this.x}`);
  }
}
