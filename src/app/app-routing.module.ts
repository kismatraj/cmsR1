import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonFormsHomeComponent } from './json-forms/json-forms-home/json-forms-home.component';

const routes: Routes = [
  {
    path: '',
    component: JsonFormsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
