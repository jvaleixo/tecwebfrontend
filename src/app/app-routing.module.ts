import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


export const routes: Routes = [{path: 'app-anuncio', component: AnuncioComponent},
{path: 'app-home', component: HomeComponent},{path: 'app-usuario', component: UsuarioComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
