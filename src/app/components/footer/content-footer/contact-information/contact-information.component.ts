import { Component, OnInit } from '@angular/core';
import { Text } from '../../../../helpers/texts';

@Component({
  selector: 'app-contact-information',
  imports: [],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.css'
})
export class ContactInformationComponent implements OnInit{

  text!: string;
  meansContact!: any[];

  ngOnInit(): void {
    this.text = Text.Footer.ContentFooter.ContactInformation.Text1;
    this.meansContact = Text.Footer.ContentFooter.ContactInformation.MeansContact;
  }
}
