import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../../items/services/services.component';
import { CommonModule } from '@angular/common';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-data-management-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './data-management-service.component.html',
  styleUrl: './data-management-service.component.css'
})
export class DataManagementServiceComponent implements OnInit{

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
    this.title = Text.Services.DataManagement.Title.Title;
    this.subTitle = Text.Services.DataManagement.Title.Text;
    this.imageTitle = Text.Services.DataManagement.Title.Img;
    this.titleDescription = Text.Services.DataManagement.Description.Title;
    this.description = Text.Services.DataManagement.Description.Text1;
    this.image = Text.Services.DataManagement.Description.Img;
    this.subTitleDescription = Text.Services.DataManagement.Description.SubTitle;
    this.subDescription = Text.Services.DataManagement.Description.Text2;
    this.titleContact = Text.Services.DataManagement.Contact.Title;
    this.textContact = Text.Services.DataManagement.Contact.Text;
    this.imageContact = Text.Services.DataManagement.Contact.Img;
  }

}
