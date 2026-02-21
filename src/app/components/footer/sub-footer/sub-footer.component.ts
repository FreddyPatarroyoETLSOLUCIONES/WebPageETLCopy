import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Text } from '../../../helpers/texts';

@Component({
  selector: 'app-sub-footer',
  imports: [CommonModule],
  templateUrl: './sub-footer.component.html',
  styleUrl: './sub-footer.component.css'
})
export class SubFooterComponent implements OnInit{

  logo!: string;
  text1!: string;
  socialNetworks!: any[];
  title1!: string;
  menuFooter!: string[];
  img!: string[];
  text2!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logo = Text.Footer.SubFooter.Logo;
    this.text1 = Text.Footer.SubFooter.Text1;
    this.socialNetworks = Text.Footer.SubFooter.socialNetworks;
    this.title1 = Text.Footer.SubFooter.Title1;
    this.menuFooter = Text.Footer.SubFooter.Menu;
    this.img = Text.Footer.SubFooter.Img;
    this.text2 = Text.Footer.SubFooter.Text2;
  }
  
  scrollToSection(section: string): void {
    const sectionMap: { [key: string]: string } = {
      'Inicio': 'navbar',
      'Servicio': 'carousel',
      'Productos': 'products',
    };
    if (section === 'Inicio') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Servicio') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Productos') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Nosotros') {
      this.router.navigate(['/aboutUs']);
    } else {
      const sectionId = sectionMap[section];
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  
}
