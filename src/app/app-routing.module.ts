import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'music', component: MusicComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path:'**', component: HomeComponent}
  
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
