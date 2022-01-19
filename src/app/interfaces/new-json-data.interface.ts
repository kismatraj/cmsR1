import { FormControl, FormGroup, FormArray } from '@angular/forms';
export interface NewJsonFormData {
  formId: number;
  formName: string;
  title: string;
  type?: string;
  showHeader?: boolean;
  navigation?: string;
  submitId?: string;
  groups?: GroupDetails[];
  formGroups?: FormGroup;
}

export interface GroupDetails {
  id?: number;
  type?: string;
  name?: string;
  sizeOfGroup?: number;
  visible?: boolean;
  groupLabeling?: boolean;
  label?: string;
  controlsGroup?: FormGroup;
  htmlControls?: HtmlControl[];
}

export interface HtmlControl {
  name?: string;
  type?: string;
  labeling?: boolean;
  label?: string;
  value?: string[];
  group_mapping_id?: number;
  formControl?: FormControl;
  options?: HtmlControlOptions[];
  styles?: HtmlControlStyles[];
  validators?: HtmlControlValidators[];
}
export interface HtmlControlOptions {
  controlOptionKey?: string;
  controlOptionValue?: string;
}

export interface HtmlControlStyles {
  styleOptionKey?: string;
  styleOptionValue?: string;
}

export interface HtmlControlValidators {
  validatorKey?: string;
  validatorValue?: string;
  errorMessage?: string;
  options?: string;
}
