import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    BodyComponent,
   ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [HeaderComponent,AppComponent,BodyComponent]
})
export class AppModule { }
