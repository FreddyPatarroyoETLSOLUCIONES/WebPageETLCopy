import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit{
  @Input() title!: string;
  @Input() text!: string;
  @Input() image!: string;
  @Input() tabs!: any[];

  ngOnInit(): void {
    
  }
}