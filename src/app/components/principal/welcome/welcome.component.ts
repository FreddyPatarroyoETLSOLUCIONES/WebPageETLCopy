import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  Title!:string;
  SubTitle!:string;
  Text!:string;
  
  ngOnInit(): void {
    this.Title = Text.Principal.Welcome.Title1;
    this.SubTitle = Text.Principal.Welcome.Subtitle1;
    this.Text = Text.Principal.Welcome.Text1;
  }
  scrollToCarousel(): void {
    const carouselElement = document.getElementById('carousel');
    if (carouselElement) {
      carouselElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
