import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  imports: [ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
