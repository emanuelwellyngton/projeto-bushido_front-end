import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoMainComponent } from './pages/home/sessao-main/sessao-main.component';

const routes: Routes = [
  {path: '', component: SessaoMainComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
