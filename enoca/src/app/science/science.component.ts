import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-teck-news',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private service:NewsApiService) { }
  scienceNewsResult:any=[];

  ngOnInit(): void {
    this.service.scienceNews().subscribe((result)=>{
      console.log(result);
      this.scienceNewsResult=result.articles;
    })
  }

}
