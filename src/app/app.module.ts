import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

/* NGX Bootstrap Modules */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './_components/about/about.component';
import { BlogPostComponent } from './_components/blog-post/blog-post.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
