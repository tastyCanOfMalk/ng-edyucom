import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageHomeComponent } from './single-page-home/single-page-home.component';
import { SecretComponent } from './secret/secret.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';

const routes: Routes = [
  { path: '', component: SinglePageHomeComponent },
  { path: 'secret', component: SecretComponent },
  { path: 'project/:id', component: ProjectViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }