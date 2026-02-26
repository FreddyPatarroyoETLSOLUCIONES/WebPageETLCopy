import { Injectable, signal } from '@angular/core';

export interface CookiePreferences {
  essential: boolean;   // Siempre true, no se puede desactivar
  analytics: boolean;   // Google Analytics, Hotjar, etc.
  preferences: boolean; // Idioma, tema, preferencias de UI
  marketing: boolean;   // Facebook Pixel, LinkedIn Insight, etc.
}

export type ConsentStatus = 'pending' | 'accepted' | 'rejected' | 'custom';

const STORAGE_KEY = 'etl_cookie_consent';
const CONSENT_VERSION = '1.0';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private _showBanner = signal(false);
  private _showModal = signal(false);
  private _preferences = signal<CookiePreferences>({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false,
  });
  private _status = signal<ConsentStatus>('pending');

  readonly showBanner = this._showBanner.asReadonly();
  readonly showModal = this._showModal.asReadonly();
  readonly preferences = this._preferences.asReadonly();
  readonly status = this._status.asReadonly();

  constructor() {
    this.loadSavedConsent();
  }

  private loadSavedConsent(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      this._showBanner.set(true);
      return;
    }
    try {
      const parsed = JSON.parse(saved);
      if (parsed.version !== CONSENT_VERSION) {
        // Nueva versión de política → pedir consentimiento de nuevo
        this._showBanner.set(true);
        return;
      }
      this._preferences.set({ ...parsed.preferences, essential: true });
      this._status.set(parsed.status);
    } catch {
      this._showBanner.set(true);
    }
  }

  private saveConsent(prefs: CookiePreferences, status: ConsentStatus): void {
    const record = {
      version: CONSENT_VERSION,
      status,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    this._preferences.set(prefs);
    this._status.set(status);
    this._showBanner.set(false);
    this._showModal.set(false);
  }

  acceptAll(): void {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true,
    };
    this.saveConsent(prefs, 'accepted');
  }

  rejectAll(): void {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: false,
      preferences: false,
      marketing: false,
    };
    this.saveConsent(prefs, 'rejected');
  }

  saveCustom(prefs: Partial<CookiePreferences>): void {
    const merged: CookiePreferences = {
      essential: true,
      analytics: prefs.analytics ?? false,
      preferences: prefs.preferences ?? false,
      marketing: prefs.marketing ?? false,
    };
    this.saveConsent(merged, 'custom');
  }

  openModal(): void {
    this._showModal.set(true);
  }

  closeModal(): void {
    this._showModal.set(false);
  }

  /** Llamar desde el footer para reabrir preferencias */
  revokeConsent(): void {
    this._showBanner.set(true);
    this._showModal.set(true);
  }

  hasConsent(category: keyof CookiePreferences): boolean {
    return this._preferences()[category];
  }
}
