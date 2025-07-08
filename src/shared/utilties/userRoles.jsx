import Cookies from 'js-cookie';
const user = JSON.parse(Cookies.get('user')) || {};
export const { data: list } = useQuery(UserRoles, {
  variables: {
    filters: { users_permissions_user: { documentId: { eq: user?.documnetId } }, app_feature: { isActive: { eq: true } } },
    sort: 'app_feature.label:asc',
  },
});
