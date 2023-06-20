interface FormInterface {
  name: string;
  email: string;
  number: string;
  billing: string;
  billingPrice: number;
  plan: string;
  addons: string[];
  addonsPrices: number[];
  total: number;
}

export default FormInterface;
