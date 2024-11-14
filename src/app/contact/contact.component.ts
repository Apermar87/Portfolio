import { Component } from '@angular/core';
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

  send() {
    console.log(this.form);

    emailjs
      .send(
        'service_fldid35',
        'template_88mq6y1',
        { ...this.form },
        {
          publicKey: 'VSQZm6xzmwWJQJMT-'
        }
      ).then(() => {
        console.log('Sent!')
      })
  }
}
