import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'music', component: MusicComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
