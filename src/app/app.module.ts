import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './components/nuevo-componente/nuevo-componente.component';
import { SumaComponent } from './components/suma/suma.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaFormComponent } from './components/lista-form/lista-form.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ComandaComponent } from './components/comanda/comanda.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';
import { FormularioListaComponent } from './components/ListaCompra/formulario-lista/formulario-lista.component';
import { ListaCompraComponent } from './components/ListaCompra/lista-compra/lista-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    SumaComponent,
    CronometroComponent,
    CalculadoraComponent,
    FormularioComponent,
    ListaFormComponent,
    ListaProductosComponent,
    ComandaComponent,
    SubrayadoDirective,
    FormularioListaComponent,
    ListaCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
