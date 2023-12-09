import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { CommunicateComponent } from './communicate/communicate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component:ExploreComponent},
  { path: 'about',component:ExploreComponent},
  { path: 'communicate',component:CommunicateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
