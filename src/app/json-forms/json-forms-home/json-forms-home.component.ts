import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-json-forms-home',
  templateUrl: './json-forms-home.component.html',
  styleUrls: ['./json-forms-home.component.scss'],
})
export class JsonFormsHomeComponent {
  useLocalJson: boolean = true;
  param: {} = {
    params: { forname: 'New_Candidate_Registration_For_AME', formupdateid: 0 },
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
