import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-auto-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-scroll.component.html',
  styleUrls: ['./auto-scroll.component.css']
})
export class AutoScrollComponent implements OnInit, AfterViewInit, OnDestroy {

  clients: string[] = [
    'client_1.png', 'client_2.png', 'client_3.png', 'client_4.png',
    'client_5.png', 'client_6.png', 'client_7.png', 'client_8.png',
    'client_9.png', 'client_10.png', 'client_11.png', 'client_12.png',
    'client_13.png', 'client_14.png', 'client_15.png', 'client_16.png',
    'client_17.png', 'client_18.png', 'client_19.png'
  ];

  darkClients: string[] = this.clients.map(client => client.replace('.png', '_dark.png'));
  isDarkTheme = false;

  @ViewChild('lightSlide') lightSlide!: ElementRef<HTMLElement>;
  @ViewChild('darkSlide') darkSlide!: ElementRef<HTMLElement>;

  private mediaQuery!: MediaQueryList;
  private mediaListener = () => this.updateTheme();
  private readonly PIXELS_PER_SECOND = 50;

  ngOnInit(): void {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkTheme = this.mediaQuery.matches;
    this.mediaQuery.addEventListener('change', this.mediaListener);
  }

  ngAfterViewInit(): void {
    this.calibrateActiveSlide();
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeEventListener('change', this.mediaListener);
  }

  private updateTheme(): void {
    this.isDarkTheme = this.mediaQuery.matches;
    // Doble rAF: el primero espera que Angular actualice el DOM (display),
    // el segundo asegura que el layout se haya recalculado.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.calibrateActiveSlide();
      });
    });
  }

  private calibrateActiveSlide(): void {
    const slideRef = this.isDarkTheme ? this.darkSlide : this.lightSlide;
    if (!slideRef?.nativeElement) return;

    const el = slideRef.nativeElement;
    const images = el.querySelectorAll('img');
    if (!images.length) return;

    const allLoaded = Array.from(images).every(img => img.complete && img.naturalWidth > 0);
    if (allLoaded) {
      this.setAnimationDuration(el);
    } else {
      let loaded = 0;
      const total = images.length;
      const check = () => {
        loaded++;
        if (loaded >= total) {
          this.setAnimationDuration(el);
        }
      };
      images.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
          check();
        } else {
          img.addEventListener('load', check, { once: true });
        }
      });
    }
  }

  private setAnimationDuration(el: HTMLElement): void {
    const oneSetWidth = el.scrollWidth / 2;
    if (oneSetWidth <= 0) return;
    const duration = oneSetWidth / this.PIXELS_PER_SECOND;
    el.style.animationDuration = `${duration}s`;
  }
}
