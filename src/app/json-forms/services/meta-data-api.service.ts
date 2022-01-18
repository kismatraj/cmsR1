import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonFormData } from 'src/app/interfaces/json-data.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MetaDataApiService {
  constructor(private http: HttpClient) {}

  getMetaData(useLocalJson?: boolean, params?: {}): Observable<JsonFormData> {
    if (useLocalJson) {
      return this.http.get<JsonFormData>('/assets/json-form-data.json');
    }
    return this.http.get<JsonFormData>(environment.metaDataApiUrl, params);
  }
}
