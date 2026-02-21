import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{
  @Input() title!:string;
  @Input() text!:string;
  @Input() benefits!: any[];
  @Input() image!: string;

  ngOnInit(): void {
    
  }
}
