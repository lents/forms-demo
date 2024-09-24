import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from '../password-strength.directive';

@Component({
  selector: 'app-validators-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordStrengthDirective],
  templateUrl: './validators-demo.component.html',
  styleUrl: './validators-demo.component.scss'
})
export class ValidatorsDemoComponent {

}
