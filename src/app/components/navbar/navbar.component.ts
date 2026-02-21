import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Text } from '../../helpers/texts';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  menuItems: any = [];
  menuOpen: boolean = false;
  subMenus: boolean[] = [];
  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.menuItems = Text.Navbar.Menu;
    this.subMenus = new Array(this.menuItems.length).fill(false);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.subMenus.fill(false);
  }

  toggleSubMenu(event: Event, index: number, isOpen: boolean): void {
    event.preventDefault();
    this.subMenus[index] = isOpen;
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}