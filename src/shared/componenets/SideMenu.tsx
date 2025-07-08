'use client';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { UserAuthority } from '../domain/types';
import { UserRoles } from '../infrastructure/show_user_roles';
import Cookies from 'js-cookie';

export default function SideMenu() {
  const userJson = Cookies.get('user');
  const user = userJson ? JSON.parse(userJson) : {};
  const { data: list } = useQuery(UserRoles, {
    variables: {
      filters: { users_permissions_user: { documentId: { eq: user?.documentId } }, app_feature: { isActive: { eq: true } } },
      sort: 'app_feature.label:asc',
    },
  });
  return (
    <div className="order-1 md:order-0 w-full h-auto md:w-[250px] md:h-full bg-gray-900 overflow-hidden md:overflow-auto">
      <div className="hidden md:flex items-center justify-center p-3">
        <Link href="/">
          <h1>Retrofit App</h1>
        </Link>
      </div>
      <nav className="w-full flex flex-row md:flex-col p-3 gap-3">
        {list?.userAuthorities.map((el: UserAuthority) => (
          <Link key={el.documentId} href={'/' + el.app_feature.name}>
            {el.app_feature.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
