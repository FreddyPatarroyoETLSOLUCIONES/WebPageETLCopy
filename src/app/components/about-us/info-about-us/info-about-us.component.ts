import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-info-about-us',
    imports: [CommonModule],
  templateUrl: './info-about-us.component.html',
  styleUrls: ['./info-about-us.component.css']
})
export class InfoAboutUsComponent { 

  @Input() title!: string;
  @Input() text!: string;
  @Input() cardsData!: any[];

  cardsData1 = [
    {
      titleCard: 'Mejorar',
      descriptionCard: 'Modernización de aplicaciones existentes.'
    }
  ];
  cardsData2 = [
    {
      titleCard: 'Diseñar y Mejorar',
      descriptionCard: 'Diseño y desarrollo de aplicaciones Web y Desktop, configurables, escalables y seguras.'
    }
  ];
  cardsData3 = [
    {
      titleCard: 'Mantener y Soportar',
      descriptionCard: 'Integración de aplicaciones y servicios.'
    }
  ]
}
