import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['/tienda/princpal']);
  }
}
