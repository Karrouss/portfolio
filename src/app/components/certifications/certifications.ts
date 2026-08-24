import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { CERTIFICATIONS, LANGUAGES } from '../../data/education.data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly language = inject(LanguageService);
  protected readonly certifications = CERTIFICATIONS;
  protected readonly languages = LANGUAGES;
}
