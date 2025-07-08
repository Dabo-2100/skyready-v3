import { InferType } from 'yup';
import { loginSchema } from './validators';

export type LoginFormValues = InferType<typeof loginSchema>;

export interface AircraftManufacturer {
  documentId: string;
  name: string;
  location: string;
}

export type AircraftManufacturersQuery = {
  aircraftManufacturers: AircraftManufacturer[];
};
