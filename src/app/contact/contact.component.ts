import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  http = inject(HttpClient)

  send() {
    console.log(this.form);

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', {
      lib_version: "4.4.1",
      service_id: "service_fldid35",
      template_id: "template_88mq6y1",
      template_params: this.form,
      user_id: "VSQZm6xzmwWJQJMT-",
    }).subscribe(() => {
      console.log('sent!');
    })
  }
}
