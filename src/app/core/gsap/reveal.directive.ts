import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { ScrollTrigger, ensureGsapRegistered, gsap } from './gsap-setup';

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

const OFFSETS: Record<RevealDirection, gsap.TweenVars> = {
  up: { y: 48, opacity: 0 },
  left: { x: -56, opacity: 0 },
  right: { x: 56, opacity: 0 },
  scale: { scale: 0.86, opacity: 0 },
};

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  @Input('appReveal') direction: RevealDirection | '' = 'up';
  @Input() revealDelay = 0;
  @Input() revealStagger = '';

  private trigger?: ScrollTrigger;

  ngAfterViewInit(): void {
    ensureGsapRegistered();

    const targets: Element[] | HTMLElement = this.revealStagger
      ? Array.from(this.el.nativeElement.querySelectorAll(this.revealStagger))
      : this.el.nativeElement;

    const from = OFFSETS[this.direction || 'up'];
    gsap.set(targets, from);

    this.trigger = ScrollTrigger.create({
      trigger: this.el.nativeElement,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(targets, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: this.revealStagger ? 0.1 : 0,
          delay: this.revealDelay / 1000,
        }),
    });
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
  }
}
