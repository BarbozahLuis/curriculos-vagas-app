import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { VagasComponent } from './vagas/vagas.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HeaderComponent } from './basic/header/header.component';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculosComponent,
    VagasComponent,
    FooterComponent,
    HeaderComponent,
    PainelVagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
