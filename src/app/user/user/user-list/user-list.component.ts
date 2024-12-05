import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { TableModule } from 'primeng/table';
import { UserDB } from '../user-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TableModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  // ===========================< PROPERTIES >============================
  userList: UserDB | any;

  constructor(private userServ: UserServiceService) {}
  // ===========================< NG ONINIT >============================
  ngOnInit(): void {
    this.getUsers();
  }

  // ===========================< GET ALL USERS >============================
  getUsers() {
    this.userServ.getAllUsers().subscribe((res) => {
      console.log(res);
      this.userList = res;
    });
  }
}
