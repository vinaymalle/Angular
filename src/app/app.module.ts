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
import { CustomepipeComponent } from './assigments/customepipe/customepipe.component';
import { AttachpipePipe } from './assigments/attachpipe.pipe';

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
    CustomepipeComponent,
    AttachpipePipe
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
