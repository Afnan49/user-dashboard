import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UserDB } from '../user-model';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [StepperModule, ButtonModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  user: UserDB = {} as UserDB;
  onSubmit() {
    console.log(this.user);
  }
}
