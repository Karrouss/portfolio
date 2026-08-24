import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { EXPERIENCE_EN, EXPERIENCE_FR, ExperienceItem } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly language = inject(LanguageService);

  protected readonly items = computed<ExperienceItem[]>(() =>
    this.language.isFr() ? EXPERIENCE_FR : EXPERIENCE_EN,
  );

  protected readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
