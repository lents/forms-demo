import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordStrengthDirective, multi: true }],
  standalone: true
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    if (!password) {
      return null; // No validation if no value
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValid = password.length >= 8 && hasUpperCase && hasNumber;

    if (!isValid) {
      return { passwordStrength: true };
    }

    return null; // If the control is valid, return null
  }
}
