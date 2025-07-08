import { gql } from '@apollo/client';

export const IndexAircraft = gql`
  query IndexAircraft {
    aircrafts {
      tailNo
      serialNo
      customerNo
      documentId
    }
  }
`;
