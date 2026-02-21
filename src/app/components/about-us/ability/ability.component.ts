import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  imports: [CommonModule],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.css'
})
export class AbilityComponent implements OnInit{
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() abilities!: any[];

  groupedAbilities!: any[][];

  ngOnInit(): void {
    this.groupedAbilities = this.groupAbilities(this.abilities, 3);
  }

  private groupAbilities(abilities: any[], groupSize: number): any[][] {
    const groups: any[][] = [];
    console.log(abilities);
    for (let i = 0; i < abilities.length; i += groupSize) {
      groups.push(abilities.slice(i, i + groupSize));
    }
    return groups;
  }
}
