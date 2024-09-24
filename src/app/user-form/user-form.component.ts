import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  name: string | undefined;
  email: string | undefined;
  ngOnInit(): void {
    this.name = "test";
    this.email = "test@test.ru";
  }


  onSubmit(form: any) {
    console.log('Form:', form);
    console.log('Form Data:', form.value);
  }
}
