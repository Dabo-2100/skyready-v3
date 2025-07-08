import { gql } from '@apollo/client';

export const UserRoles = gql`
  query UserAuthorities($filters: UserAuthorityFiltersInput) {
    userAuthorities(filters: $filters) {
      documentId
      canUpdate
      canRead
      canDelete
      canCreate
      app_feature {
        documentId
        label
        name
      }
    }
  }
`;
