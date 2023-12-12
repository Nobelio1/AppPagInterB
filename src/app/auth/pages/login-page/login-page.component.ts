import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  UsuarioIn,
  UsuarioOut,
} from '../../../tienda/interfaces/tienda.interface';
import { TiendaService } from '../../../tienda/services/tienda.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  public acesso: boolean = false;
  public user!: UsuarioIn;

  public myFomr: FormGroup = this.fb.group({
    username: [''],
    contrasena: [''],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private tiendaService: TiendaService,
    private authService: AuthService
  ) {}

  onSubmit(event: Event) {
    this.user = this.myFomr.getRawValue();

    this.authService.loginUser(this.user).subscribe((data: UsuarioOut) => {
      if (data.idUsuario === 0) {
        this.acesso = true;
      } else {
        event.preventDefault();
        this.router.navigate(['/tienda/princpal']);
      }
    });
  }
}
