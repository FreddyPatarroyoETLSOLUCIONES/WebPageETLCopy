import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-product',
  imports: [CommonModule],
  templateUrl: './title-product.component.html',
  styleUrl: './title-product.component.css'
})
export class TitleProductComponent implements OnInit{
    @Input() title!:string
    @Input() subTitle!:string
    @Input() imageTitle!:string

    ngOnInit(): void {
    }
}
