import { Component, inject } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UserDB } from '../user-model';
import { UserServiceService } from '../user-service.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    FormsModule,
    NgxDropzoneModule,
    NgFor,
    NgClass,
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  user: UserDB = {
    name: '',
    job: '',
    age: 20,
    gender: '',
    location: '',
    image: '',
    about: '',
    bio: '',
    motivation: [],
    goals: [],
    skills: {},
    personality: [],
    media: {
      Facebook: '',
      Instagram: '',
      LinkedIn: '',
      WhatsApp: '',
    },
  };
  private userServ = inject(UserServiceService);
  private route = inject(Router);
  minlength: any;

  processMotivations(
    motivInput: string,
    goalsInput: string,
    personInput: string
  ) {
    this.user.motivation = motivInput.split(',').map((motiv) => motiv.trim());
    this.user.goals = goalsInput.split(',').map((goal) => goal.trim());
    this.user.personality = personInput
      .split(',')
      .map((person) => person.trim());
  }
  addSkill(key: string, value: string): void {
    if (!this.user.skills) {
      this.user.skills = {};
    }
    if (key && value) {
      this.user.skills[key] = value;
    } else {
      console.error('Skill key or value is missing');
    }
  }

  files: File[] = [];
  image: string = '';
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit() {
    if (this.files.length > 0 && this.files.length < 2) {
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'user_dashboard');
      data.append('cloud_name', 'dou5mcich');

      this.userServ.uploadImage(data).subscribe((res) => {
        if (res && res.secure_url) {
          this.image = res.secure_url;
          this.user.image = this.image;
          this.userServ.addUserDoc(this.user);
          this.route.navigate(['/list']);
        }
      });
    }
  }
}
