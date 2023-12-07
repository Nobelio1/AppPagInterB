import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  UsuarioIn,
  UsuarioOut,
} from '../../../tienda/interfaces/tienda.interface';
import { TiendaService } from '../../../tienda/services/tienda.service';

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
    private tiendaService: TiendaService
  ) {}

  onSubmit(event: Event) {
    this.user = this.myFomr.getRawValue();

    this.tiendaService.loginUser(this.user).subscribe((data: UsuarioOut) => {
      if (data.idUsuario === 0) {
        console.log('No existe');
        //todo: crear pop-up para cuando no se acceda
        this.acesso = true;
      } else {
        event.preventDefault();
        this.router.navigate(['/tienda/princpal']);
      }
    });
  }
}
