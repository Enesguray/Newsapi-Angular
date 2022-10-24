import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TeckNewsComponent } from './teck-news/teck-news.component';
import {NewsApiService} from './Service/news-api.service'
import {HttpClientModule} from '@angular/common/http';

import {SportNewsComponent} from './sport/sport.component';
import {HealthNewsComponent} from './health/health.component';
import {ScienceNewsComponent} from './science/science.component';
import { BusinessNewsComponent } from './business/business.component';
import { EntertainmentNewsComponent } from './entertainment/entertainment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TeckNewsComponent,
    SportNewsComponent,
    HealthNewsComponent,
    ScienceNewsComponent,
    BusinessNewsComponent,
    EntertainmentNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
