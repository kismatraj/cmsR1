import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JsonFormsHomeComponent } from './json-forms-home/json-forms-home.component';

const routes: Routes = [
  {
    path: '',
    component: JsonFormsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonFormsRoutingModule {
  constructor(private http: HttpClient) {}

  getMetaData(fromLocalSystem: boolean, param?: {}) {
    if (fromLocalSystem) {
      return this.http.get('./assets/json-form-data.json');
    }
    return this.http.get(environment.metaDataApiUrl, param);
  }
}
