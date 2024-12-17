import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  errors = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  messageSent = false;

  http = inject(HttpClient)

  validateForm(): boolean {
    let isValid = true;

    // Validación del nombre
    if (!this.form.name.trim()) {
      this.errors.name = 'El nombre es obligatorio.';
      isValid = false;
    } else {
      this.errors.name = '';
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.email.trim()) {
      this.errors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(this.form.email)) {
      this.errors.email = 'Introduzca un correo electrónico válido.';
      isValid = false;
    } else {
      this.errors.email = '';
    }

    // Validación del teléfono
    const phoneRegex = /^\d{9}$/;
    if (!this.form.phone.trim()) {
      this.errors.phone = 'El teléfono es obligatorio.';
      isValid = false;
    } else if (!phoneRegex.test(this.form.phone)) {
      this.errors.phone = 'Introduzca un teléfono válido.';
      isValid = false;
    } else {
      this.errors.phone = '';
    }

    // Validación del asunto
    if (!this.form.subject.trim()) {
      this.errors.subject = 'El asunto es obligatorio.';
      isValid = false;
    } else {
      this.errors.subject = '';
    }

    // Validación del mensaje
    if (!this.form.message.trim()) {
      this.errors.message = 'El mensaje es obligatorio.';
      isValid = false;
    } else {
      this.errors.message = '';
    }

    return isValid;
  }

  send() {
    if (!this.validateForm()) {
      console.log('Formulario no válido:', this.errors);
      return;
    }

    console.log('Formulario válido, enviando...', this.form);

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', {
      lib_version: "4.4.1",
      service_id: "service_fldid35",
      template_id: "template_88mq6y1",
      template_params: this.form,
      user_id: "VSQZm6xzmwWJQJMT-",
    },
      {
        responseType: 'text',
      }
    )
      .subscribe(() => {
        console.log('Mensaje enviado con éxito');
        this.messageSent = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        };
        setTimeout(() => this.messageSent = false, 5000);
      });
  }

  adjustHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

}
