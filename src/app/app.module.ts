import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    DirectivesComponent,
    LifecyclehooksComponent,
    TemplatedirvenformsComponent,
    ParentComponent,
    ChildComponent,
    SampleModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
