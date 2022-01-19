import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Component, JsonFormData } from 'src/app/interfaces/json-data.interface';
import { GroupDetails, HtmlControl, HtmlControlStyles, HtmlControlValidators, NewJsonFormData } from 'src/app/interfaces/new-json-data.interface';
import { MetaDataApiService } from './meta-data-api.service';

@Injectable({
  providedIn: 'root',
})
export class JsonFormParserService {
  private rootGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private metaApi: MetaDataApiService) {
    this.initForm();
  }

  private initForm() {
    this.rootGroup = this.formBuilder.group({
      groupsArray: this.formBuilder.array([]),
    });
  }

  get groupsArray(): FormArray {
   j return this.rootGroup.get('groupsArray') as FormArray;
  }

  private transJsonFormData(rawData: JsonFormData): NewJsonFormData {
    let { Groups, ...formOptions } = rawData;
    let jsonFormData:NewJsonFormData = {
      formId: formOptions.FP_ID,
      formName: formOptions.FP_Name,
      title: formOptions.FP_Title,
      type: formOptions.FP_Type,
      showHeader: formOptions.Form_Header == 'Y' ? true : false,
      navigation: formOptions.FP_Navigation,
      submitId: formOptions.Submit_ID,      
    };
    jsonFormData.groups= this.transformGroup(Groups);
    jsonFormData.formGroups= this.rootGroup;
    return jsonFormData;
  }

  private transformGroup(Groups: any): GroupDetails[] {
    let allGroups: GroupDetails[] = [];
    for (let group of Groups) {
      let { Component, ...groupOptions } = group;
      allGroups.push({
        type: groupOptions.Group_Type,
        name: groupOptions.Group_Name,
        sizeOfGroup: groupOptions.Group_Size,
        visible: groupOptions.IS_Visible == 1 ? true : false,
        groupLabeling: groupOptions.Group_Labelling == 'Y' ? true : false,
        label: groupOptions.Group_Display,

        htmlControls: this.transformHtmlControl(Component),

      });
    }
    return allGroups;
  }

  private transformHtmlControl(Components: Component[], controlsGroup: FormGroup): HtmlControl[] {
    let htmlControls: HtmlControl[] = [];

    let formControlArray: FormControl[] = [];

    for (let component of Components) {
      let control: HtmlControl = {};
      (control.name = component.Component_Label),
        (control.type = component.Component_Type),
        (control.labeling = component.Labelling == 'Y' ? true : false),
        (control.label = component.Label_Display_name),
        (control.value = [component.component_value]),
        (control.group_mapping_id = component.group_component_mapping_ID),
        (control.options = [
          {
            controlOptionKey: 'placeholder',
            controlOptionValue: component.Component_Help_Text,
          },
        ]),
        (control.styles = this.addStyleProperties(component)),
        (control.validators = this.addValidatorProperties(component)),
        (control.formControl = this.createFormControl(control)),
        htmlControls.push(control);

      formControlArray.push(control.formControl);
    }
    controlsGroup.(this.formBuilder.group(formControlArray));

    return htmlControls;
  }

  processJsonForm(
    useLocalJson?: boolean,
    params?: {}
  ): Observable<NewJsonFormData> {
    return this.metaApi
      .getMetaData(useLocalJson, params)
      .pipe(map((response: JsonFormData) => this.transJsonFormData(response)));
  }

  private createFormControl(component: HtmlControl) {
    let validators = [];
    validators = this.addValidatorClasses(component.validators);
    return this.formBuilder.control(component.value, validators);
  }

  private createFormControl2(component: HtmlControl) {
    let validators = [];
    validators = this.addValidatorClasses(component.validators);
    return this.formBuilder.control(component.value, validators);
  }

  private addStyleProperties(component: Component): HtmlControlStyles[] {
    let styles: HtmlControlStyles[] = [];
    styles.push({
      styleOptionKey: 'align',
      styleOptionValue: component.Component_Align,
    });
    styles.push({
      styleOptionKey: 'size',
      styleOptionValue: component.Component_Size,
    });
    styles.push({
      styleOptionKey: 'font-align',
      styleOptionValue: component.Component_Align,
    });
    styles.push({
      styleOptionKey: 'font-size',
      styleOptionValue: component.Component_Font_Size.toString(),
    });
    styles.push({
      styleOptionKey: 'visible',
      styleOptionValue: component.Component_Is_Visible.toString(),
    });
    styles.push({
      styleOptionKey: 'readonly',
      styleOptionValue: component.Component_Read_Only.toString(),
    });
    return styles;
  }

  private addValidatorProperties(
    component: Component
  ): HtmlControlValidators[] {
    let validators: HtmlControlValidators[] = [];
    validators.push({
      validatorKey: 'required',
      validatorValue: component.Component_Mandatory.toString(),
    });
    return validators;
  }

  private addValidatorClasses(controlValidators?: HtmlControlValidators[]) {
    let validators: any[] = [];
    if (controlValidators) {
      for (const validator of controlValidators) {
        switch (validator.validatorKey) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'email':
            validators.push(Validators.email);
            break;
        }
      }
    }
    return validators;
  }
}
