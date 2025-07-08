'use client';
import AppPage from '@/shared/componenets/AppPage';
import { useQuery } from '@apollo/client';
import { IndexAircraft } from './_infrastructure/graphql/index_aircraft';
import { Aircraft } from '@/shared/domain/types';
import Loader from '@/shared/componenets/Loader';
import { useRouter } from 'next/navigation';

export default function AircraftList() {
  const router = useRouter();
  const { data: aircraftList, loading } = useQuery(IndexAircraft, { variables: { sort: ['serialNo:asc'] } });
  return (
    <AppPage name="Aircraft List" newButton={'New Aircraft'}>
      {loading && <Loader />}
      <table className="table border border-base-content/5 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Serial No</th>
            <th>Customer No</th>
            <th>Tail No</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {aircraftList?.aircrafts.map((aircraft: Aircraft, index: number) => (
            <tr key={aircraft.documentId} className="hover:bg-gray-800 cursor-pointer transition" onClick={() => router.push(`/aircrafts/${aircraft.documentId}`)}>
              <td>{index + 1}</td>
              <td>{aircraft.serialNo}</td>
              <td>{aircraft.customerNo}</td>
              <td>{aircraft.tailNo}</td>
              <td>{aircraft.aircraft_status?.name || '---'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppPage>
  );
}
