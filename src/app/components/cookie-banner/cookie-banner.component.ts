import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService, CookiePreferences } from '../../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent {
  tempPrefs = signal<Omit<CookiePreferences, 'essential'>>({
    analytics: false,
    preferences: false,
    marketing: false,
  });

  constructor(public cookieService: CookieConsentService) {}

  openModal(): void {
    const current = this.cookieService.preferences();
    this.tempPrefs.set({
      analytics: current.analytics,
      preferences: current.preferences,
      marketing: current.marketing,
    });
    this.cookieService.openModal();
  }

  toggle(category: keyof Omit<CookiePreferences, 'essential'>): void {
    this.tempPrefs.update(p => ({ ...p, [category]: !p[category] }));
  }

  saveCustom(): void {
    this.cookieService.saveCustom(this.tempPrefs());
  }

  acceptAll(): void {
    this.cookieService.acceptAll();
  }

  rejectAll(): void {
    this.cookieService.rejectAll();
  }
}
