'use client';
import AppPage from '@/shared/componenets/AppPage';
import { useQuery } from '@apollo/client';
import { AircraftManufacturer } from './_domain/types';
import Loader from '@/shared/componenets/Loader';
import { IndexManufacturers } from './_infrastructure/graphql/index_manufacturers';

export default function ManufacturersList() {
  const { data: list, loading } = useQuery(IndexManufacturers);
  return (
    <AppPage name="Manufacturers List" newButton={'New Manufacturer'}>
      {loading && <Loader />}
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
          {list?.aircraftManufacturers.map((Manufacturer: AircraftManufacturer, index: number) => (
            <tr key={Manufacturer.documentId}>
              <td>{index + 1}</td>
              <td>{Manufacturer.name}</td>
              <td>{Manufacturer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppPage>
  );
}
