import { ReactNode } from 'react';
export default function PageContent({ children }: { children: ReactNode }) {
  return <div className="w-full h-10 grow overflow-auto bg-gray-900 p-3">{children}</div>;
}
