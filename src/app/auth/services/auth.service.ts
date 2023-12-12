import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { UsuarioIn, UsuarioOut } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.API_MASTER;
  private user?: UsuarioIn;

  constructor(private httpClient: HttpClient) {}

  get currentUser(): UsuarioIn | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  loginUser(request: UsuarioIn): Observable<UsuarioOut> {
    return this.httpClient
      .post<UsuarioOut>(`${this.baseUrl}/usuario/login`, request)
      .pipe(
        tap(() => ((this.user = request), console.log(this.user))),
        tap(() => localStorage.setItem('token', 'fdasd2e12.rrwf23213.dr6g5wf')),
        tap(() => localStorage.setItem('user', JSON.stringify(request)))
      );
  }

  chekAuthentication(): Observable<boolean> {
    const storedUser = localStorage.getItem('user');
    if (!localStorage.getItem('token') || !storedUser) return of(false);

    try {
      this.user = JSON.parse(storedUser);

      return this.httpClient
        .post<UsuarioIn>(`${this.baseUrl}/usuario/login`, this.user)
        .pipe(
          tap(() => (this.user = this.user)),
          map((user) => !!user),
          catchError((err) => of(false))
        );
    } catch (error) {
      console.error('Error parsing user from localStorage', error);
      return of(false);
    }
  }

  logout() {
    console.log(this.user);
    this.user = undefined;
    localStorage.clear();
  }
}
