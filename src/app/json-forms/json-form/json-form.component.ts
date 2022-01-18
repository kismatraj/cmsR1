import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
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
  rootGroup!: FormGroup;
  jsonFormData!: NewJsonFormData;

  constructor(private jsonParser: JsonFormParserService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.jsonParser.processJsonForm(this.useLocalJson, this.param).pipe(
      map((data) => {
        // this.jsonFormData = data[0];
        // this.rootGroup = data[1];
        console.log(data[0]);
      })
    );
  }
  ngOnInit(): void {}
}
