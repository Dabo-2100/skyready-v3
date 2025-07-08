import Link from 'next/link';

export default function SideMenu() {
  return (
    <div className="order-1 md:order-0 w-full h-auto md:w-[250px] md:h-full bg-gray-900 overflow-hidden md:overflow-auto">
      <div className="hidden md:flex items-center justify-center p-3">
        <h1>Retrofit App</h1>
      </div>
      <nav className="w-full flex flex-row md:flex-col p-3 gap-3">
        <Link href="/">Dashboard</Link>
        <Link href="/aircrafts">Aircraft List</Link>
        <Link href="/service-bulletins">Service Bulletins</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/users">Users</Link>
      </nav>
    </div>
  );
}
