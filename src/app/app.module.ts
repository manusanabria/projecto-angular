import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// HttpClient modulo para API
import { HttpClientModule } from '@angular/common/http';

// Routing Modulo para Servicio de Rutas
import { APP_ROUTING } from './app-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
