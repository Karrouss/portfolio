import { Component, ElementRef, OnDestroy, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ensureGsapRegistered, gsap } from '../../core/gsap/gsap-setup';
import { RevealDirective } from '../../core/gsap/reveal.directive';

interface Stat {
  target: number;
  suffix: string;
  labelKey: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  private readonly translate = inject(TranslateService);

  protected readonly roles = toSignal(this.translate.stream('hero.roles'), { initialValue: [] as string[] });
  protected readonly roleIndex = signal(0);
  protected readonly roleVisible = signal(true);
  protected readonly currentRole = computed(() => this.roles()[this.roleIndex()] ?? '');

  protected readonly badges = ['Java', 'Spring', 'Angular', 'Docker'];

  protected readonly stats: Stat[] = [
    { target: 8, suffix: '+', labelKey: 'hero.stat_years' },
    { target: 8, suffix: '', labelKey: 'hero.stat_missions' },
    { target: 12, suffix: '+', labelKey: 'hero.stat_stack' },
  ];
  protected readonly statValues = signal(this.stats.map(() => 0));

  private readonly statsEl = viewChild<ElementRef<HTMLElement>>('statsRow');
  private roleTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.roleTimer = setInterval(() => {
      this.roleVisible.set(false);
      setTimeout(() => {
        const total = this.roles().length || 1;
        this.roleIndex.update((i) => (i + 1) % total);
        this.roleVisible.set(true);
      }, 320);
    }, 2800);

    ensureGsapRegistered();
    queueMicrotask(() => this.animateStats());
  }

  ngOnDestroy(): void {
    clearInterval(this.roleTimer);
  }

  private animateStats(): void {
    const el = this.statsEl()?.nativeElement;
    if (!el) return;

    gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.stat')).forEach((statEl, i) => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: this.stats[i].target,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: statEl, start: 'top 90%', once: true },
        onUpdate: () => {
          this.statValues.update((values) => {
            const next = [...values];
            next[i] = Math.round(counter.val);
            return next;
          });
        },
      });
    });
  }
}
