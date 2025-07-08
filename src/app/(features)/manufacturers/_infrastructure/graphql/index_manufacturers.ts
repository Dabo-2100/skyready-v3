import { gql } from '@apollo/client';

export const IndexManufacturers = gql`
  query AircraftManufacturers {
    aircraftManufacturers {
      documentId
      name
      location
    }
  }
`;
