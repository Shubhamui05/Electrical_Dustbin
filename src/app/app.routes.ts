import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path
import { DashboardComponent } from './dashboard/dashboard.component'; // Adjust the path
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Add other routes here
];
