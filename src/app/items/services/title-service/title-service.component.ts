import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-service',
  imports: [CommonModule],
  templateUrl: './title-service.component.html',
  styleUrl: './title-service.component.css'
})
export class TitleServiceComponent implements OnInit{
    @Input() title!:string
    @Input() subTitle!:string
    @Input() imageTitle!:string

    ngOnInit(): void {
    }
}
