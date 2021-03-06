import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HeaderComponent } from './globals/header/header.component';
import { CanastaComponent } from './globals/canasta/canasta.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import {appRoutingModule} from'./routin';
import { SliderProductoComponent } from './slider/slider-producto/slider-producto.component';
import { SliderProductoItemComponent } from './slider/slider-producto/slider-producto-item/slider-producto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CanastaComponent,
    HomeComponent,
    CategoriaComponent,
    SliderProductoComponent,
    SliderProductoItemComponent,
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
