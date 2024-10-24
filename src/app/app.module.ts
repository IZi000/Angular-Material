import { NgModule, signal } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms"; 

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PiePaginaComponent,
        PaginainicialComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule, 
    ],
    providers: [
        provideAnimationsAsync(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
 }
