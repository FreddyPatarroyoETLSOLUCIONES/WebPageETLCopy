import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { ServicesComponent } from '../../../items/services/services.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-automation-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './process-automation-service.component.html',
  styleUrl: './process-automation-service.component.css'
})
export class ProcessAutomationServiceComponent implements OnInit{

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
    this.title = Text.Services.ProcessAutomation.Title.Title;
    this.subTitle = Text.Services.ProcessAutomation.Title.Text;
    this.imageTitle = Text.Services.ProcessAutomation.Title.Img;
    this.titleDescription = Text.Services.ProcessAutomation.Description.Title;
    this.description = Text.Services.ProcessAutomation.Description.Text1;
    this.image = Text.Services.ProcessAutomation.Description.Img;
    this.subTitleDescription = Text.Services.ProcessAutomation.Description.SubTitle;
    this.subDescription = Text.Services.ProcessAutomation.Description.Text2;
    this.titleContact = Text.Services.ProcessAutomation.Contact.Title;
    this.textContact = Text.Services.ProcessAutomation.Contact.Text;
    this.imageContact = Text.Services.ProcessAutomation.Contact.Img;
  }
}
