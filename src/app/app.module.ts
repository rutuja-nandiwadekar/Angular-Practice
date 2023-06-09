import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './Components/helloworld/helloworld.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { InterpolationComponent } from './Components/Databinding/interpolation/interpolation.component';
import { PropertyComponent } from './Components/Databinding/property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    ResumeComponent,
    InterpolationComponent,
    PropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
