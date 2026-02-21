import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { ServicesComponent } from '../../../items/services/services.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software-quality-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './software-quality-service.component.html',
  styleUrl: './software-quality-service.component.css'
})
export class SoftwareQualityServiceComponent implements OnInit{
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
    this.title = Text.Services.SoftwareQuality.Title.Title;
    this.subTitle = Text.Services.SoftwareQuality.Title.Text;
    this.imageTitle = Text.Services.SoftwareQuality.Title.Img;
    this.titleDescription = Text.Services.SoftwareQuality.Description.Title;
    this.description = Text.Services.SoftwareQuality.Description.Text1;
    this.image = Text.Services.SoftwareQuality.Description.Img;
    this.subTitleDescription = Text.Services.SoftwareQuality.Description.SubTitle;
    this.subDescription = Text.Services.SoftwareQuality.Description.Text2;
    this.titleContact = Text.Services.SoftwareQuality.Contact.Title;
    this.textContact = Text.Services.SoftwareQuality.Contact.Text;
    this.imageContact = Text.Services.SoftwareQuality.Contact.Img;
  }
}
