import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  protected readonly isSubmitting = signal(false);

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  alertMessage: string = '';
  alertType: 'success' | 'danger' | '' = '';

  async onSubmit() {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    this.alertMessage = '';
    this.alertType = '';

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.alertMessage = 'Message sent successfully!';
      this.alertType = 'success';
    } catch (error) {
      this.alertMessage = 'Error sending message. Please try again.';
      this.alertType = 'danger';
    } finally {
      this.isSubmitting.set(false);

      // Auto-hide alert after 4 seconds
      setTimeout(() => {
        this.alertMessage = '';
        this.alertType = '';
      }, 4000);
    }
  }
}


