import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { ensureGsapRegistered, gsap } from '../../core/gsap/gsap-setup';
import { SKILLS, TOOLS } from '../../data/skills.data';

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

  private readonly barsEl = viewChild<ElementRef<HTMLElement>>('bars');

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
