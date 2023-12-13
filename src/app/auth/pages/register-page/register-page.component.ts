import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaService } from '../../../tienda/services/tienda.service';
import {
  NuevoUsuarioIn,
  NuevoUsuarioOut,
} from '../../../tienda/interfaces/tienda.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  public newUser!: NuevoUsuarioIn;
  public acesso: boolean = false;

  public myform: FormGroup = this.fb.group({
    contrasena: [''],
    username: [''],
    email: [''],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private tiendaService: TiendaService
  ) {}

  onSubmit(event: Event) {
    this.newUser = this.myform.getRawValue();

    this.tiendaService
      .registerUsser(this.newUser)
      .subscribe((data: NuevoUsuarioOut) => {
        if (data.idUsuario === 0) {
          console.log('Usario ya existe');
          this.acesso = true;
        } else {
          event.preventDefault();
          this.router.navigate(['/auth/login']);
        }
      });
  }
}
