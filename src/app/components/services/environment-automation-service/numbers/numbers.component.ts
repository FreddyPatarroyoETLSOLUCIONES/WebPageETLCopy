import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent implements OnInit{

  @Input() title!: string;
  @Input() text!: string;
  @Input() steps!: any[];

  ngOnInit(): void {
    
  }
}
