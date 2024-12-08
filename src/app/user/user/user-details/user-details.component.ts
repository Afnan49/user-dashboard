import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { skill, social, UserDB } from '../user-model';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userId: number = 0;
  user: UserDB | null = null;
  userSills: [string, skill][] = [];
  userMedia: [string, social][] = [];

  constructor(
    private router: ActivatedRoute,
    private userServ: UserServiceService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ docId }) => {
      if (docId) {
        this.getUserDoc(docId);
      }
    });
  }

  getUserDoc(docId: string) {
    this.userServ.getUserDoc(docId).subscribe((res) => {
      this.user = res;
      this.userSills = Object.entries(this.user.skills);
      console.log(this.user.skills);
      this.userMedia = Object.entries(this.user.media);
      console.log(this.userMedia);
    });
  }
}
