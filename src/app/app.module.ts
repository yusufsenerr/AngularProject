import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BodyComponent } from './body/body.component';
import { ProductFilterPipe } from './body/product-filter.pipe';


@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProductFilterPipe,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,AppComponent,BodyComponent]
})
export class AppModule { }
