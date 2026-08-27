import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { ensureGsapRegistered, gsap } from '../../core/gsap/gsap-setup';
import { SKILLS, TOOLS } from '../../data/skills.data';
import { LANGUAGES } from '../../data/languages.data';

const ORBIT_RADIUS_PX = 270;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  protected readonly skills = SKILLS;
  protected readonly tools = [...TOOLS, ...TOOLS];
  protected readonly languages = LANGUAGES;
  protected readonly languagesList = LANGUAGES.map((l) => l.name).join(', ');

  private readonly barsEl = viewChild<ElementRef<HTMLElement>>('bars');

  orbitCardTransform(index: number): string {
    const angle = (360 / this.languages.length) * index;
    //return index < 7 ? `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS_PX}px)` : `rotateY(${angle}deg) translateZ(-${ORBIT_RADIUS_PX}px)`;
    return `rotateY(${angle}deg) translateZ(-${ORBIT_RADIUS_PX}px)`;
  }

  ngAfterViewInit(): void {
    ensureGsapRegistered();
    const el = this.barsEl()?.nativeElement;
    if (!el) return;

    gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.bar-fill')).forEach((bar) => {
      const level = bar.dataset['level'];
      gsap.to(bar, {
        width: `${level}%`,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 92%', once: true },
      });
    });
  }
}
