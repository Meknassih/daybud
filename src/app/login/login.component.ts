import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  login() {
    console.log(this.email, this.password);
    this.userService.login(this.email, this.password).subscribe((response) => {
      if ('data' in response) {
        console.log('Login successful', response);
      } else {
        console.log('Login failed', response);
      }
    });
  }
}
