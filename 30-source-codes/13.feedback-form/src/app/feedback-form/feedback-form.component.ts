import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
})
export class FeedbackFormComponent {
  feedback = {
    name: '',
    email: '',
    feedback: '',
  };
  submitted = false;

  onSubmit(form: any) {
    if (!form.valid) return;
    console.log('Form Submitted!', this.feedback);
    this.submitted = true;
  }
}
