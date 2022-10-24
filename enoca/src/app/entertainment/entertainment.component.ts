import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-teck-news',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private service:NewsApiService) { }
  entertainmentNewsResult:any=[];

  ngOnInit(): void {
    this.service.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.entertainmentNewsResult=result.articles;
    })
  }

}
