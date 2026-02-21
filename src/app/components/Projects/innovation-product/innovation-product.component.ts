import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../../../items/products/products.component';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-innovation-product',
  imports: [ProductsComponent],
  templateUrl: './innovation-product.component.html',
  styleUrl: './innovation-product.component.css'
})
export class InnovationProductComponent implements OnInit{
  title!: string;
  subTitle!:string;
  imageTitle!:string;
  titleDescription!:string;
  description!:string;
  image!:string;
  subTitleDescription!:string;
  subDescription!:string;
  titleContact!:string;
  textContact!:string;
  imageContact!:string;
  
  ngOnInit(): void {
    this.title = Text.Products.Innovation.Title.Title;
    this.subTitle = Text.Products.Innovation.Title.Text;
    this.imageTitle = Text.Products.Innovation.Title.Img;
    this.titleDescription = Text.Products.Innovation.Description.Title;
    this.description = Text.Products.Innovation.Description.Text1;
    this.image = Text.Products.Innovation.Description.Img;
    this.subTitleDescription = Text.Products.Innovation.Description.SubTitle;
    this.subDescription = Text.Products.Innovation.Description.Text2;
    this.titleContact = Text.Products.Innovation.Contact.Title;
    this.textContact = Text.Products.Innovation.Contact.Text;
    this.imageContact = Text.Products.Innovation.Contact.Img;
  }
}
