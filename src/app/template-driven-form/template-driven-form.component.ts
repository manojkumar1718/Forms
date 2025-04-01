import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  user = {
    name: '',
    email: '',
    message: ''
    };

submitted = false;

submitForm() {
console.log('Form submitted:', this.user);
this.submitted = true;
}

}
