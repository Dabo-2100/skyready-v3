import { ReactNode } from 'react';
import PageContent from './PageContent';
import PageHeader from './PageHeader';

export default function AppPage({ name, children, hasBackButton = false, newButton = false }: { name: string; children: ReactNode; hasBackButton?: boolean; newButton?: boolean | string }) {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-start gap-3">
      <PageHeader pageName={name} hasBackButton={hasBackButton} newButton={newButton} />
      <PageContent>{children}</PageContent>
    </div>
  );
}
