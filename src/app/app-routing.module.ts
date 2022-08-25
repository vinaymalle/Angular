import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { ExtraTopicsComponent } from './extra-topics/extra-topics.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReatviFormsComponent } from './reatvi-forms/reatvi-forms.component';
import { SampleModule } from './sample/sample.module';
import { TemplatedirvenformsComponent } from './templatedirvenforms/templatedirvenforms.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicsComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'hooks',
    component: LifecyclehooksComponent
  },
  {
    path: 'templateforms',
    component: TemplatedirvenformsComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'sample',
    component: SampleModule
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'extraTopics',
    component: ExtraTopicsComponent
  },
  {
    path: 'reactiveForms',
    component: ReatviFormsComponent
  },
  {
    path: '**',
    redirectTo: 'pipes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
