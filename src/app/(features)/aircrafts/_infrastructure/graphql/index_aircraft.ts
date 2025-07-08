import { gql } from '@apollo/client';

export const IndexAircraft = gql`
  query Aircrafts($sort: [String]) {
    aircrafts(sort: $sort) {
      documentId
      serialNo
      tailNo
      customerNo
      aircraft_status {
        name
      }
    }
  }
`;
