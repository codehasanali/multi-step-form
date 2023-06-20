import { Reducer } from "redux";
import FormData from "../interfaces/FormInterface";
import { ActionTypes, SetFormDataAction } from "./actions";
import BillingEnum from "../enums/BillingEnum";

export interface AppState {
  formData: FormData;
}

const initialState: AppState = {
  formData: {
    name: "",
    email: "",
    number: "",
    billing: BillingEnum[0],
    billingPrice: 0,
    plan: "",
    addons: [],
    addonsPrices: [],
    total: 0,
  },
};

export const formDataReducer: Reducer<
  AppState["formData"],
  SetFormDataAction
> = (state = initialState.formData, action) => {
  switch (action.type) {
    case ActionTypes.SET_FORM_DATA:
      return action.payload;
    default:
      return state;
  }
};
