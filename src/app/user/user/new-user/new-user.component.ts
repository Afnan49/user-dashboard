import { Component, inject } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UserDB } from '../user-model';
import { UserServiceService } from '../user-service.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [StepperModule, ButtonModule, FormsModule, NgxDropzoneModule, NgFor],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  user: UserDB = {} as UserDB;

  private userServ = inject(UserServiceService);
  private route = inject(Router);

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
    console.log(this.files[0]);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit() {
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'user_dashboard');
    data.append('cloud_name', 'dou5mcich');

    this.userServ.uploadImage(data).subscribe((res) => {
      this.image = res.secure_url;
      this.user.image = this.image;
    });
    console.log(this.user);
    // this.userServ.addUserDoc(this.user);
    // this.route.navigate(['/list']);
  }
}
