import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly phone = '07 54 55 34 56';
  protected readonly email = 'khalilarroussi96@gmail.com';
  protected readonly linkedin = 'https://www.linkedin.com/in/khalil-arroussi-97756a119';
}
