import { Component, Input, OnInit } from '@angular/core';
import { TitleProductComponent } from './title-product/title-product.component';
import { DescriptionComponent } from '../../items/products/description/description.component';
import { ContactComponent } from '../../items/products/contact/contact.component';

@Component({
  selector: 'app-products',
  imports: [
    TitleProductComponent,
    DescriptionComponent,
    ContactComponent,
    TitleProductComponent
],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  @Input() title!:string
  @Input() subTitle!:string
  @Input() imageTitle!:string
  @Input() titleDescription!:string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() subTitleDescription!:string;
  @Input() subDescription!:string;
  @Input() titleContact!:string;
  @Input() textContact!:string;
  @Input() imageContact!:string;
  
  ngOnInit(): void {
    this.imageTitle = 'url(' + this.imageTitle + ')';
    this.imageContact = 'url(' + this.imageContact + ')'

    window.scroll({
      top: 0,
      left: 0,
      //behavior: "smooth",
    })
  }
}
