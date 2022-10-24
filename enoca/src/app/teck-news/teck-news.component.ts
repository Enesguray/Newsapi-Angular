import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-teck-news',
  templateUrl: './teck-news.component.html',
  styleUrls: ['./teck-news.component.css']
})
export class TeckNewsComponent implements OnInit {

  constructor(private service:NewsApiService) { }
  technologyNewsResult:any=[];

  ngOnInit(): void {
    this.service.technologyNews().subscribe((result)=>{
      console.log(result);
      this.technologyNewsResult=result.articles;
    })
  }

}
