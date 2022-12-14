import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TemplatedirvenformsComponent } from './templatedirvenforms/templatedirvenforms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SampleModule } from './sample/sample.module';
import { PipesComponent } from './pipes/pipes.component';
import { ExtraTopicsComponent } from './extra-topics/extra-topics.component';
import { ReatviFormsComponent } from './reatvi-forms/reatvi-forms.component';
import { ArraymethodsComponent } from './arraymethods/arraymethods.component';
import { ObservableComponent } from './observable/observable.component';
import {HttpClientModule} from '@angular/common/http';
import { CutomepipeComponent } from './cutomepipe/cutomepipe.component';
import { AttachcontentPipe } from './attachcontent.pipe';
import { ViewChangeDirective } from './view-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    DirectivesComponent,
    LifecyclehooksComponent,
    TemplatedirvenformsComponent,
    ParentComponent,
    ChildComponent,
    SampleModule,
    PipesComponent,
    ExtraTopicsComponent,
    ReatviFormsComponent,
    ArraymethodsComponent,
    ObservableComponent,
    CutomepipeComponent,
    AttachcontentPipe,
    ViewChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
