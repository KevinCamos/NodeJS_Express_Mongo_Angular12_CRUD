import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [//declaración de componentes
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [ //modulos que importamos al proyecto
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//servicios
  bootstrap: [AppComponent]//componentes que se van a iniciar

})
export class AppModule { }
