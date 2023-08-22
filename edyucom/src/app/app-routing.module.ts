import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageHomeComponent } from './single-page-home/single-page-home.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const routes: Routes = [
  {path: '', component: SinglePageHomeComponent},
  {path: 'projects/:title', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
