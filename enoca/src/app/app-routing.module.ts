import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent} from './headlines/headlines.component';
import { TeckNewsComponent } from './teck-news/teck-news.component';
import { SportNewsComponent } from './sport/sport.component';
import { HealthNewsComponent } from './health/health.component';
import { ScienceNewsComponent } from './science/science.component';
import { BusinessNewsComponent} from './business/business.component';
import { EntertainmentNewsComponent} from './entertainment/entertainment.component';


const routes: Routes = [
  {path:'',component:HeadlinesComponent},
  {path:'tecknology',component:TeckNewsComponent},
  {path:'sport',component:SportNewsComponent},
  {path:'health',component:HealthNewsComponent},
  {path:'science',component:ScienceNewsComponent},
  {path:'business',component:BusinessNewsComponent},
  {path:'entertainment',component:EntertainmentNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
