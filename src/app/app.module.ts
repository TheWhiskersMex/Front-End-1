import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CorreoComponent } from './components/correo/correo.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { CompletoComponent } from './components/completo/completo.component';
import { SharedModule } from './shared/shared.module';



//RUTAS
const rutas: Routes =[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component : IndexComponent,
   
  },
  {
    path: 'registro',
    component : RegistroComponent,
   
  },
  {
    path: 'correo',
    component : CorreoComponent,
   
  },
  {
    path: 'verificacion',
    component : VerificacionComponent,
   
  },
  {
    path: 'completo',
    component : CompletoComponent,
   
  },
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistroComponent,
    CorreoComponent,
    VerificacionComponent,
    CompletoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(rutas,{
      enableTracing : true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
