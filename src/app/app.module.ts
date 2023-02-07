import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ProductFilterPipe } from './body/product-filter.pipe';
import { SidebarComponent } from './Sidebar/sidebar/sidebar.component';
import { FooterComponent } from './Footer/footer/footer.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    ProductFilterPipe,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,SidebarComponent,AppComponent,BodyComponent,FooterComponent]
})
export class AppModule { }
