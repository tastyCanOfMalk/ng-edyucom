import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SinglePageHomeComponent } from './single-page-home/single-page-home.component';
import { MapComponent } from './about/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SecretComponent } from './secret/secret.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SinglePageHomeComponent,
    MapComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LeafletModule,
    NgbModule,
    NgxGoogleAnalyticsModule.forRoot('G-37G909EFJJ'),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
