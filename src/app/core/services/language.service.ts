import { Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'fr' | 'en';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);

  readonly lang = signal<Lang>(this.readInitial());
  readonly isFr = computed(() => this.lang() === 'fr');

  constructor() {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setFallbackLang('fr');
    this.use(this.lang());
  }

  toggle(): void {
    this.use(this.lang() === 'fr' ? 'en' : 'fr');
  }

  use(lang: Lang): void {
    this.lang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
  }

  private readInitial(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
  }
}
