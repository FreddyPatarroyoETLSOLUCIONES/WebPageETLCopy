import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../../items/services/services.component';
import { CommonModule } from '@angular/common';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-software-factory-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './software-factory-service.component.html',
  styleUrl: './software-factory-service.component.css'
})
export class SoftwareFactoryServiceComponent implements OnInit{
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
    this.title = Text.Services.SoftwareFactory.Title.Title;
    this.subTitle = Text.Services.SoftwareFactory.Title.Text;
    this.imageTitle = Text.Services.SoftwareFactory.Title.Img;
    this.titleDescription = Text.Services.SoftwareFactory.Description.Title;
    this.description = Text.Services.SoftwareFactory.Description.Text1;
    this.image = Text.Services.SoftwareFactory.Description.Img;
    this.subTitleDescription = Text.Services.SoftwareFactory.Description.SubTitle;
    this.subDescription = Text.Services.SoftwareFactory.Description.Text2;
    this.titleContact = Text.Services.SoftwareFactory.Contact.Title;
    this.textContact = Text.Services.SoftwareFactory.Contact.Text;
    this.imageContact = Text.Services.SoftwareFactory.Contact.Img;
  }
}
