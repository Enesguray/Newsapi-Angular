import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }
  //Apiurl
  myApi ="d2ef63ea497b47f9bf4f0f69576054b7"

  topHeadLinesApiUrl ="https://newsapi.org/v2/top-headlines?country=tr&apiKey="
  techNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey="
  sportNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey="
  healthNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey="
  scienceNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey="
  businessNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey="
  entertainmentNewsApiUrl =  "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey="
  
  
  topHeadLines():Observable<any>
    {
      return this.http.get(this.topHeadLinesApiUrl+this.myApi);
    }
    technologyNews():Observable<any>{
      return this.http.get(this.techNewsApiUrl+this.myApi)
    }
    sportNews():Observable<any>{
      return this.http.get(this.sportNewsApiUrl+this.myApi)
    }
    healthNews():Observable<any>{
      return this.http.get(this.healthNewsApiUrl+this.myApi)
    }
    scienceNews():Observable<any>{
      return this.http.get(this.scienceNewsApiUrl+this.myApi)
    }
    businessNews():Observable<any>{
      return this.http.get(this.businessNewsApiUrl+this.myApi)
    }
    entertainmentNews():Observable<any>{
      return this.http.get(this.entertainmentNewsApiUrl+this.myApi)
    }
}
