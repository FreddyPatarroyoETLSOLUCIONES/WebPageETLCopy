import { Component, Input, OnInit } from '@angular/core';
import { ProductsComponent } from '../../../items/products/products.component';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-infocusnews-product',
  imports: [ProductsComponent],
  templateUrl: './infocusnews-product.component.html',
  styleUrl: './infocusnews-product.component.css'
})
export class InfocusnewsProductComponent implements OnInit{
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
    this.title = Text.Products.Infocusnews.Title.Title;
    this.subTitle = Text.Products.Infocusnews.Title.Text;
    this.imageTitle = Text.Products.Infocusnews.Title.Img;
    this.titleDescription = Text.Products.Infocusnews.Description.Title;
    this.description = Text.Products.Infocusnews.Description.Text1;
    this.image = Text.Products.Infocusnews.Description.Img;
    this.subTitleDescription = Text.Products.Infocusnews.Description.SubTitle;
    this.subDescription = Text.Products.Infocusnews.Description.Text2;
    this.titleContact = Text.Products.Infocusnews.Contact.Title;
    this.textContact = Text.Products.Infocusnews.Contact.Text;
    this.imageContact = Text.Products.Infocusnews.Contact.Img;
  }
}
