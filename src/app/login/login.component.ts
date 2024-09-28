import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink] // Make sure RouterLink is imported
})

export class LoginComponent {
  thisLogin: boolean = false;
  loginInProgress: boolean = false;
  isLogin = true;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  login() {
    const userCredentials = {
      username: this.username,
      password: this.password
    };
    this.validateLogin(userCredentials);
  }

  signUp() {
    alert('Sign up functionality not implemented.');
  }

  validateLogin(credentials: { username: string; password: string }) {
    const admin = { username: 'admin', password: 'admin123' };
    const user = { username: 'user', password: 'user123' };

    if (
      credentials.username === admin.username &&
      credentials.password === admin.password
    ) {
      this.loginInProgress = true;
      setTimeout(() => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard after 2 seconds
      }, 500);
    } else if (
      credentials.username === user.username &&
      credentials.password === user.password
    ) {
      this.loginInProgress = true;
      setTimeout(() => {
        this.router.navigate(['/home']); // Redirect to home after 2 seconds
      }, 500);
    } else {
      alert('Invalid username or password');
    }
  }
}
