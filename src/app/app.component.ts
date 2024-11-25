import { Component } from '@angular/core';
import { UserComponent } from './user/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UserComponent],
})
export class AppComponent {
  title = 'user-dashboard';
}
