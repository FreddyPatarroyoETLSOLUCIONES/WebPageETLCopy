import { Component } from '@angular/core';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';

@Component({
  selector: 'app-footer',
  imports: [
    SubFooterComponent,
    ContentFooterComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
