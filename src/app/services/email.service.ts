import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
}

const EMAILJS_PUBLIC_KEY = 'TuytFAvSlOW0HeD6Q';
const EMAILJS_SERVICE_ID = 'service_x1nr3ng';
const EMAILJS_TEMPLATE_ID = 'template_nmwxx2l';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  sendEmail(formData: ContactFormData): Promise<void> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.project,
      //to_email: 'jorge.salas@etlsoluciones.com'
    };

    return emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => undefined);
  }
}
