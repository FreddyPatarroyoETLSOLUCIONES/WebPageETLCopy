import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private readonly emailService = inject(EmailService);

  formData = {
    name: '',
    email: '',
    phone: '',
    project: ''
  };

  submitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  onSubmit(form: NgForm): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    this.emailService.sendEmail(this.formData)
      .then(() => {
        this.isLoading = false;
        this.successMessage = '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.';
        form.resetForm();
        this.submitted = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.errorMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
      });
  }
}
