import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

@Component({
  selector: 'app-content-footer',
  imports: [
    ContactFormComponent,
    ContactInformationComponent
  ],
  templateUrl: './content-footer.component.html',
  styleUrl: './content-footer.component.css'
})
export class ContentFooterComponent {

}
