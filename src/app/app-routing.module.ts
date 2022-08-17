import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
