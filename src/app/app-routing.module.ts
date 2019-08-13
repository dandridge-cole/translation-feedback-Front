import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorComponent } from './selector/selector.component'


const routes: Routes = [
  {path: 'selector', component: SelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
