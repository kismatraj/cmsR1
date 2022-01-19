import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewJsonFormData } from 'src/app/interfaces/new-json-data.interface';
import { JsonFormParserService } from '../services/json-form-parser.service';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
})
export class JsonFormComponent implements OnInit {
  @Input('useLocalJson') useLocalJson!: boolean;
  @Input('param') param!: {};
  formData$!: Observable<NewJsonFormData>;

  constructor(private jsonParser: JsonFormParserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.formData$ = this.jsonParser.processJsonForm(
      this.useLocalJson,
      this.param
    );
  }
  ngOnInit(): void {}
}
