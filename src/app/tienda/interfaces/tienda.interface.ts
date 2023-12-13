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

export interface ProductoAdd {
  idProducto: string;
  nombreProducto: string;
  descripcionProducto: string;
  descripcionLarga: string;
  categoria: string;
  urlImagen: string;
  precio: number;
}

export interface ListaProductosDetalle {
  idProducto: string;
  nombreProducto: string;
  descripcionProducto: string;
  descripcionLarga: string;
  categoria: string;
  urlImagen: string;
  precio: number;
}

export interface ProductoCarrito {
  idProducto: string;
  nombreProducto: string;
  descripcionProducto: string;
  descripcionLarga: string;
  categoria: string;
  urlImagen: string;
  precio: number;
  cantidad: number;
}
