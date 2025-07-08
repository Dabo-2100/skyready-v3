'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PageHeader({ pageName, hasBackButton, newButton }: { pageName: string; hasBackButton?: boolean; newButton?: boolean | string }) {
  const pathname = usePathname();
  return (
    <div className="w-full p-3 flex flex-row justify-between items-center bg-gray-900">
      {hasBackButton && (
        <Link href="../" className="btn btn-primary">
          Back
        </Link>
      )}
      <h2 className="text-lg font-bold text-white">{pageName}</h2>
      {newButton && (
        <Link href={pathname + '/new'} className="btn btn-primary">
          {newButton}
        </Link>
      )}
    </div>
  );
}
