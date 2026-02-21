import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { ServicesComponent } from '../../../items/services/services.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-it-operations-management-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './it-operations-management-service.component.html',
  styleUrl: './it-operations-management-service.component.css'
})
export class ItOperationsManagementServiceComponent implements OnInit{
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
      this.title = Text.Services.ItOperationsManagement.Title.Title;
      this.subTitle = Text.Services.ItOperationsManagement.Title.Text;
      this.imageTitle = Text.Services.ItOperationsManagement.Title.Img;
      this.titleDescription = Text.Services.ItOperationsManagement.Description.Title;
      this.description = Text.Services.ItOperationsManagement.Description.Text1;
      this.image = Text.Services.ItOperationsManagement.Description.Img;
      this.subTitleDescription = Text.Services.ItOperationsManagement.Description.SubTitle;
      this.subDescription = Text.Services.ItOperationsManagement.Description.Text2;
      this.titleContact = Text.Services.ItOperationsManagement.Contact.Title;
      this.textContact = Text.Services.ItOperationsManagement.Contact.Text;
      this.imageContact = Text.Services.ItOperationsManagement.Contact.Img;
    }
}
