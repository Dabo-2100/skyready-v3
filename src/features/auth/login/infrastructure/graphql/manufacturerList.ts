import { gql } from '@apollo/client';

export const loginMutation = gql`
  query AircraftManufacturers {
    aircraftManufacturers {
      documentId
      name
      location
    }
  }
`;
