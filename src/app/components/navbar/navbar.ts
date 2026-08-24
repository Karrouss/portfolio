import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);

  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { id: 'about', label: 'nav.about' },
    { id: 'skills', label: 'nav.skills' },
    { id: 'experience', label: 'nav.experience' },
    { id: 'education', label: 'nav.education' },
    { id: 'contact', label: 'nav.contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
