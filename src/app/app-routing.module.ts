import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArraymethodsComponent } from './arraymethods/arraymethods.component';
import { AuthenticationGuard } from './authentication.guard';
import { BasicsComponent } from './basics/basics.component';
import { CheckGuard } from './check.guard';
import { CutomepipeComponent } from './cutomepipe/cutomepipe.component';
import { DirectivesComponent } from './directives/directives.component';
import { ExtraTopicsComponent } from './extra-topics/extra-topics.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ObservableComponent } from './observable/observable.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReatviFormsComponent } from './reatvi-forms/reatvi-forms.component';
import { SampleModule } from './sample/sample.module';
import { TemplatedirvenformsComponent } from './templatedirvenforms/templatedirvenforms.component';
import { UserPermissionGuard } from './user-permission.guard';

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
    component: ParentComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'sample',
    component: SampleModule,
    canDeactivate: [CheckGuard]
  },
  {
    path: 'pipes',
    component: PipesComponent,
    resolve: [UserPermissionGuard]
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
    path: 'arrayMethods',
    component: ArraymethodsComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'customepipes',
    component: CutomepipeComponent
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
