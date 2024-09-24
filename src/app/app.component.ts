import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { ValidatorsDemoComponent } from "./validators-demo/validators-demo.component";
import { PasswordStrengthDirective } from './password-strength.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent, RouterOutlet, ValidatorsDemoComponent, PasswordStrengthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'forms-demo';
}
