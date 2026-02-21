import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../../../items/products/products.component';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-business-intelligence-product',
  imports: [ProductsComponent],
  templateUrl: './business-intelligence-product.component.html',
  styleUrl: './business-intelligence-product.component.css'
})
export class BusinessIntelligenceProductComponent implements OnInit{
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
    this.title = Text.Products.BusinessIntelligence.Title.Title;
    this.subTitle = Text.Products.BusinessIntelligence.Title.Text;
    this.imageTitle =  Text.Products.BusinessIntelligence.Title.Img;
    this.titleDescription = Text.Products.BusinessIntelligence.Description.Title;
    this.description = Text.Products.BusinessIntelligence.Description.Text1;
    this.image = Text.Products.BusinessIntelligence.Description.Img;
    this.subTitleDescription = Text.Products.BusinessIntelligence.Description.SubTitle;
    this.subDescription = Text.Products.BusinessIntelligence.Description.Text2;
    this.titleContact = Text.Products.BusinessIntelligence.Contact.Title;
    this.textContact = Text.Products.BusinessIntelligence.Contact.Text;
    this.imageContact = Text.Products.BusinessIntelligence.Contact.Img;
  }
}
