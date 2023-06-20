import { Action } from "redux";
import FormData from "../interfaces/FormInterface";

export enum ActionTypes {
  SET_FORM_DATA = "SET_FORM_DATA",
}

export interface SetFormDataAction extends Action<ActionTypes.SET_FORM_DATA> {
  payload: FormData;
}

export const setFormData = (data: FormData): SetFormDataAction => ({
  type: ActionTypes.SET_FORM_DATA,
  payload: data,
});
