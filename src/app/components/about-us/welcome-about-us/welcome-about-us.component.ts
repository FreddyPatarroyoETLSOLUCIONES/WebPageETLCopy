import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-about-us',
  imports: [CommonModule],
  templateUrl: './welcome-about-us.component.html',
  styleUrls: ['./welcome-about-us.component.css']
})
export class WelcomeAboutUsComponent implements OnInit{

  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() imageTitle!: string;
  

  ngOnInit(): void {
    this.imageTitle = 'url(' + this.imageTitle + ')';
  }
}
