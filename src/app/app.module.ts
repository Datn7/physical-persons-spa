import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//new imports
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
//import 'leaflet/dist/images/marker-shadow.png';

//HTTP
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MapComponent } from './utilities/map/map.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutoCompleteComponent } from './actors/actors-auto-complete/actors-auto-complete.component';
import { ThreeComponent } from './three/three.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexActorsComponent,
    CreateActorComponent,
    EditActorComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MapComponent,
    MultipleSelectorComponent,
    ActorsAutoCompleteComponent,
    ThreeComponent,
    TemplateFormsComponent,
    AngularMaterialComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
