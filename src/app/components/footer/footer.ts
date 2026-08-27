import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../core/gsap/reveal.directive';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

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
      console.log('Honeypot filled, likely spam. Dropping submission.');
      // Silently drop likely spam without tipping off the bot.
      this.state.set('success');
      this.form.reset();
      return;
    }

    this.state.set('sending');

    if(this.form.valid) {
      const templateParams = {
            from_name: this.form.value.name,
            from_email: this.form.value.email,
            message: this.form.value.message,
            to_name: 'Khalil', // Or configured name
            reply_to: this.form.value.email,
        };

        // Send Main Email (To You)
        emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams, environment.emailjs.publicKey)
            .then((response: any) => {
                // console.log('Main Email SUCCESS!', response.status, response.text);

                // Send Auto-Reply (To User)
                emailjs.send(environment.emailjs.serviceId, environment.emailjs.autoReplyTemplateId, templateParams, environment.emailjs.publicKey)
                    .then((replyResponse: any) => {
                        this.state.set('success');
                        // console.log('Auto-Reply SUCCESS!', replyResponse.status, replyResponse.text);

                        // Wait 3 seconds before resetting
                        setTimeout(() => {
                            this.form.reset();
                        }, 3000);
                    });
            }, (err: any) => {
                console.error('FAILED...', err);
                this.state.set('error'); // Allow retrying
            });
    }

  }

}
