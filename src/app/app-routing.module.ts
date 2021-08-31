import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: IndexActorsComponent },

  { path: 'actors', component: IndexActorsComponent },
  {
    path: 'actors/create',
    component: CreateActorComponent,
  },
  {
    path: 'actors/edit/:id',
    component: EditActorComponent,
  },
  { path: 'template', component: TemplateFormsComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'material', component: AngularMaterialComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
