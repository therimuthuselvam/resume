import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SkillsComponent } from './skills/skills.component';
import { KnownLanguagesComponent } from './known-languages/known-languages.component';
import { EducationDetailsComponent } from './education-details/education-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    SkillsComponent,
    KnownLanguagesComponent,
    EducationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
