import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { ArtistsComponent } from './artists/artists.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { NavbarResponsiveComponent } from './navbar-responsive/navbar-responsive.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsResponsiveComponent } from './news-responsive/news-responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    ArtistsComponent,
    FooterComponent,
    FooterNavComponent,
    NavbarResponsiveComponent,
    CarouselComponent,
    NewsResponsiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
