import SideMenu from '@/shared/componenets/SideMenu';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <SideMenu />
      <div className="grow h-full overflow-hidden bg-gray-950 p-3">{children}</div>
    </div>
  );
}
