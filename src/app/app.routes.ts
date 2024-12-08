import { Routes } from '@angular/router';
import { UserListComponent } from './user/user/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './user/user/user-details/user-details.component';
import { NewUserComponent } from './user/user/new-user/new-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'home' },
  { path: 'list', component: UserListComponent, title: 'user list' },
  { path: 'user/:docId', component: UserDetailsComponent, title: 'user' },
  { path: 'newUser', component: NewUserComponent, title: 'add user' },
];
