import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-product',
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit{
  
  @Input() titleDescription!:string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() subTitleDescription!:string;
  @Input() subDescription!:string;

  ngOnInit(): void {
  }

}
