export interface JsonFormData {
  FP_ID: number;
  Action: string;
  FP_Desc: string;
  FP_Name: string;
  FP_Tags: string;
  FP_Type: string;
  FP_Title: string;
  Submit_ID: string;
  Form_Header: string;
  FP_Navigation: string;
  Form_Display_Name: string;
  DefaultOrientation: string;
  Groups: Group[];
}
export interface Group {
  Group_Attr: string;
  Group_Name: string;
  Group_Size: number;
  Group_Type: string;
  IS_Visible: number;
  Group_Display: string;
  Group_Labelling: string;
  Component: Component[];
}
export interface Component {
  Hide_Id: string;
  Show_Id: string;
  Labelling: string;
  Component_Size: string;
  Component_Type: string;
  Component_Align: string;
  Component_Label: string;
  component_value: string;
  Label_Display_name: string;
  Component_Font_Size: number;
  Component_Help_Text: string;
  Component_Mandatory: number;
  Component_Read_Only: number;
  Component_Is_Visible: number;
  Component_List_values: number;
  Component_Compare_With: string;
  Component_Condition_Type?: any;
  Component_Compare_Message: string;
  group_component_mapping_ID: number;
  Component_Compare_Condition: string;
  Component_Condition_Perform_On: string;
}
