import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SessaoMainComponent } from './pages/home/sessao-main/sessao-main.component';
import { SessaoSobreComponent } from './pages/home/sessao-sobre/sessao-sobre.component';
import { SessaoObjetivosComponent } from './pages/home/sessao-objetivos/sessao-objetivos.component';
import { SessaoDepoimentosComponent } from './pages/home/sessao-depoimentos/sessao-depoimentos.component';
import { SessaoPatrocinadoresComponent } from './pages/home/sessao-patrocinadores/sessao-patrocinadores.component';
import { SessaoComoAjudarComponent } from './pages/home/sessao-como-ajudar/sessao-como-ajudar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SessaoMainComponent,
    SessaoSobreComponent,
    SessaoObjetivosComponent,
    SessaoDepoimentosComponent,
    SessaoPatrocinadoresComponent,
    SessaoComoAjudarComponent,
   
    
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
