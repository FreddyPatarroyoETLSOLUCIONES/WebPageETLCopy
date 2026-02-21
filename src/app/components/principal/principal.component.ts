import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { AutoScrollComponent } from './auto-scroll/auto-scroll.component';
import { CounterComponent } from './counter/counter.component';
import { SkillsComponent } from './skills/skills.component';
import { InfoValuesComponent } from './info-values/info-values.component';

@Component({
  selector: 'app-principal',
  imports: [
    WelcomeComponent,
    CarouselComponent,
    ProductsComponent,
    AutoScrollComponent,
    CounterComponent,
    SkillsComponent,
    InfoValuesComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      //behavior: "smooth",
    })
  }
}
