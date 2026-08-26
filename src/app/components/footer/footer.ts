import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import { ContactService } from '../../core/services/contact.service';

type SendState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RevealDirective, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly year = new Date().getFullYear();
  protected readonly phone = '07 54 55 34 56';
  protected readonly email = 'khalilarroussi96@gmail.com';
  protected readonly linkedin = 'https://www.linkedin.com/in/khalil-arroussi-97756a119';

  protected readonly state = signal<SendState>('idle');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // honeypot: real users never fill this, bots that autofill every field do.
    company: [''],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid || this.state() === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.controls.company.value) {
      // Silently drop likely spam without tipping off the bot.
      this.state.set('success');
      this.form.reset();
      return;
    }

    this.state.set('sending');
    const { name, email, subject, message } = this.form.getRawValue();

    try {
      await this.contactService.send({ name, email, subject, message });
      this.state.set('success');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }
}


