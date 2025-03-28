import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch: 'full' },
  {path:"projects",component:ProjectsComponent},
  {path:"home",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
