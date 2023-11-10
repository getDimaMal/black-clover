import { Property } from './PropertiesTable';

const property: Omit<Property, 'id'> = {
  name: 'Property Name',
  description: 'Description Name',
  type: 'string',
  events: 'Login Button Tap',
  constraints: 'Active Order',
  optionality: 'Optional',
};

export const getPropertiesList = (amount: number): Property[] =>
  new Array(amount).fill(property).map((property, id) => ({ ...property, id }));
