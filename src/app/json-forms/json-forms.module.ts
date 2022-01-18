import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JsonFormsRoutingModule } from './json-forms-routing.module';
import { JsonFormsHomeComponent } from './json-forms-home/json-forms-home.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { MetaDataApiService } from './services/meta-data-api.service';

@NgModule({
  declarations: [JsonFormsHomeComponent, JsonFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonFormsRoutingModule,
  ],
  providers: [MetaDataApiService, JsonFormsRoutingModule],
  exports: [JsonFormsHomeComponent],
})
export class JsonFormsModule {}
