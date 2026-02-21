import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../../items/services/services.component';
import { QuestionComponent } from './question/question.component';
import { NumbersComponent } from './numbers/numbers.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-environment-automation-service',
  imports: [ServicesComponent, QuestionComponent, NumbersComponent, AccordionComponent],
  templateUrl: './environment-automation-service.component.html',
  styleUrl: './environment-automation-service.component.css'
})
export class EnvironmentAutomationServiceComponent implements OnInit{
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
  titleQuestion!: string;
  textQuestion!: string;
  itemsQuestion!: any[];
  imageQuestion!: string;
  titleNumbers!: string;
  textNumber!: string;
  itemsNumber!: any[];
  titleAccordion!: string;
  textAccordion!: string;
  imgAccordion!: string;
  itemsAccordion!: any[];

  ngOnInit(): void {
    this.title = Text.Services.EnvironmentAutomation.Title.Title;
    this.subTitle = Text.Services.EnvironmentAutomation.Title.Text;
    this.imageTitle = Text.Services.EnvironmentAutomation.Title.Img;
    this.titleDescription = Text.Services.EnvironmentAutomation.Description.Title;
    this.description = Text.Services.EnvironmentAutomation.Description.Text1;
    this.image = Text.Services.EnvironmentAutomation.Description.Img;
    this.subTitleDescription = Text.Services.EnvironmentAutomation.Description.SubTitle;
    this.subDescription = Text.Services.EnvironmentAutomation.Description.Text2;
    this.titleContact = Text.Services.EnvironmentAutomation.Contact.Title;
    this.textContact = Text.Services.EnvironmentAutomation.Contact.Text;
    this.imageContact = Text.Services.EnvironmentAutomation.Contact.Img;
    this.titleQuestion = Text.Services.EnvironmentAutomation.Question.Title;
    this.textQuestion = Text.Services.EnvironmentAutomation.Question.Text;
    this.itemsQuestion = Text.Services.EnvironmentAutomation.Question.Items;
    this.imageQuestion = Text.Services.EnvironmentAutomation.Question.Img;
    this.titleNumbers = Text.Services.EnvironmentAutomation.Numbers.Title;
    this.textNumber = Text.Services.EnvironmentAutomation.Numbers.Text;
    this.itemsNumber = Text.Services.EnvironmentAutomation.Numbers.Items;
    this.titleAccordion = Text.Services.EnvironmentAutomation.Accordion.Title;
    this.textAccordion = Text.Services.EnvironmentAutomation.Accordion.Text;
    this.imgAccordion = Text.Services.EnvironmentAutomation.Accordion.Img;
    this.itemsAccordion = Text.Services.EnvironmentAutomation.Accordion.Items;
  }
  
}
