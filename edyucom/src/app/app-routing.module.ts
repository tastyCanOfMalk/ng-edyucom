import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageHomeComponent } from './single-page-home/single-page-home.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {path: '', component: SinglePageHomeComponent},
  {path: 'secret', component: SecretComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
