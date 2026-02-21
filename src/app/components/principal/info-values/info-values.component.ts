import { Component, OnInit } from '@angular/core';
import { Text } from '../../../helpers/texts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-values',
  imports: [CommonModule],
  templateUrl: './info-values.component.html',
  styleUrl: './info-values.component.css',
  host: { ngSkipHydration: 'true' },
})
export class InfoValuesComponent implements OnInit{
  services!:any[];

  ngOnInit(): void {
    this.services = Text.Principal.InfoValues.Services;
  }
}
