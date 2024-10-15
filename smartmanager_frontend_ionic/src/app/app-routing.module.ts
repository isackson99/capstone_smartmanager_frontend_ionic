import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Cambié esto de home a login
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasPageModule) },
  { path: 'recuperar', loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule) },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule) }, // Añadido
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule) },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  // Otras rutas que desees añadir...
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
