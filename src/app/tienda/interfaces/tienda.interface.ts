export interface UsuarioIn {
  username: string;
  contrasena: string;
}

export interface UsuarioOut {
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

export interface ListaProductos {
  idProducto: string;
  nombreProducto: string;
  descripcionProducto: string;
  categoria: string;
  urlImagen: string;
  precio: number;
}

export interface ListaProductosDetalle {
  idProducto: string;
  nombreProducto: string;
  descripcion: string;
  categoria: string;
  urlImagen: string;
  precio: number;
}