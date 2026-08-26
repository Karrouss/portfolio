import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://api.web3forms.com/submit';

  async send(payload: ContactPayload): Promise<void> {
    const body = {
      access_key: environment.web3formsAccessKey,
      from_name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
    };

    const response = await firstValueFrom(
      this.http.post<{ success: boolean; message?: string }>(this.endpoint, body),
    );

    if (!response.success) {
      throw new Error(response.message ?? 'Web3Forms submission failed');
    }
  }
}
