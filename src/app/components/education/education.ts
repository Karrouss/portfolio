import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { EDUCATION } from '../../data/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly language = inject(LanguageService);
  protected readonly education = EDUCATION;
}
