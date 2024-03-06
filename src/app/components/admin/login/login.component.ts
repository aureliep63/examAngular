import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new User();
  strError?: string;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  loggedUser() {
    this.isLoading = true;
    this.authService.login(this.user).subscribe(data => {
      localStorage.setItem("token", data.token);
      this.router.navigate(["admin"]);
    }, error => {
      console.log(error);
      this.strError = error["type"];
      this.isLoading = false;
    })
  }

}
