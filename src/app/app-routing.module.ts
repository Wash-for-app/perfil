import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },

  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'servico',
    loadChildren: () => import('./servico/servico.module').then( m => m.ServicoPageModule)
  },
  {
    path: 'sessao-fotos',
    loadChildren: () => import('./sessao-fotos/sessao-fotos.module').then( m => m.SessaoFotosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
