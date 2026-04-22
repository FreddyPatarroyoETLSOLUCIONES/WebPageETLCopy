import { Component, Input, OnInit } from '@angular/core';
import { TitleServiceComponent } from '../../items/services/title-service/title-service.component';
import { DescriptionComponent } from '../../items/services/description/description.component';
import { ContactComponent } from '../../items/services/contact/contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [
    TitleServiceComponent,
    DescriptionComponent,
    ContactComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{

  @Input() title!:string
  @Input() subTitle!:string
  @Input() imageTitle!:string
  @Input() titleDescription!:string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() subTitleDescription!:string;
  @Input() subDescription!:string;
  @Input() features?: {Icon: string, Title: string, Text: string}[];
  @Input() videoUrl!: string;
  @Input() titleContact!:string;
  @Input() textContact!:string;
  @Input() imageContact!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.refreshComponent();

    this.imageTitle = 'url(' + this.imageTitle + ')';
    this.imageContact = 'url(' + this.imageContact + ')';
    
    window.scroll({
      top: 0,
      left: 0,
    })
  }

  refreshComponent() {
    this.router.navigate([this.router.url]);
  }
}
