import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products!:any[];
  title!:string;
  text!:string;
  
  elementProduct1!:any;
  elementProduct2!:any;
  elementProduct3!:any;
  elementProduct4!:any;
  
  ngOnInit(): void {
    this.title = Text.Principal.Products.Title1;
    this.text = Text.Principal.Products.Text1;
    this.products = Text.Principal.Products.ProductsList;
    
    this.assignIdDocument();
  }
  
  changeHover(index:number ){
    if (window.innerWidth <= 1200) return;

    this.assignIdDocument();
    
    switch (index) {
      case 0:
        this.elementProduct1.classList.add('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 1:
          this.elementProduct1.classList.add('active');
          this.elementProduct2.classList.remove('active');
          this.elementProduct3.classList.remove('active');
          this.elementProduct4.classList.remove('active');
          break;  
        
      case 2:
        this.elementProduct2.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 3:
        this.elementProduct3.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 4:
        this.elementProduct4.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        break;
        
      default:
        this.elementProduct1.classList.add('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
    }
  }

  assignIdDocument = ():void => {
    if(this.elementProduct1 == undefined || this.elementProduct1 == null ||
      this.elementProduct2 == undefined || this.elementProduct2 == null ||
      this.elementProduct3 == undefined || this.elementProduct3 == null ||
      this.elementProduct4 == undefined || this.elementProduct4 == null
    ){
      this.elementProduct1 = document.getElementById('product1');
      this.elementProduct2 = document.getElementById('product2');
      this.elementProduct3 = document.getElementById('product3');
      this.elementProduct4 = document.getElementById('product4');
    }
  }
}
