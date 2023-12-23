import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoMainComponent } from './pages/home/sessao-main/sessao-main.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: '', component: SessaoMainComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
