'use client';
import AppPage from '@/shared/componenets/AppPage';
import { useQuery } from '@apollo/client';
import { IndexAircraft } from './_infrastructure/graphql/index_aircraft';
import { Aircraft } from '@/shared/domain/types';

export default function AircraftList() {
  const { data: aircraftList } = useQuery(IndexAircraft);
  console.log(aircraftList);
  return (
    <AppPage name="Aircraft List" newButton={'New Aircraft'}>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Serial No</th>
            <th>Customer No</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {aircraftList?.aircrafts?.map((aircraft: Aircraft, index: number) => (
            <tr key={aircraft?.documentId}>
              <td>{index + 1}</td>
              <td>{aircraft?.serialNo}</td>
              <td>{aircraft?.customerNo}</td>
              <td>{aircraft?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppPage>
  );
}
