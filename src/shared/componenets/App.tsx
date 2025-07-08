'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/store/ApolloClient';
import { Toaster } from 'react-hot-toast';
export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ApolloProvider client={client}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full flex h-[100dvh] overflow-hidden">{children}</div>
    </ApolloProvider>
  );
}
