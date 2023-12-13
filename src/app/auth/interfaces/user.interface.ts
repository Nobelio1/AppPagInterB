export interface UsuarioIn {
  username: string;
  contrasena: string;
}

export interface UsuarioOut {
  data: UsuarioIn;
  idUsuario: number;
  mensaje: string;
}

export interface NuevoUsuarioIn {
  contrasena: string;
  username: string;
  email: string;
}
export interface NuevoUsuarioOut {
  idUsuario: number;
  mensaje: string;
}
