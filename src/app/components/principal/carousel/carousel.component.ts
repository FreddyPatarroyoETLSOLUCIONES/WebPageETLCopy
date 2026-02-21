import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class CarouselComponent implements OnInit{
  Title!: string;
  Text!: string;
  servicios!: any[];
  //responsiveOptions: any[];

  ngOnInit(): void {
    this.Title = Text.Principal.Services.Title;
    this.Text = Text.Principal.Services.Text;
    this.servicios = Text.Principal.Services.ServicesList;
  }
}
