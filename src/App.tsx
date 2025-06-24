'use client';
import { ApolloProvider } from '@apollo/client';
import client from '@/store/ApolloClient';

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ApolloProvider client={client}>
      <div className="w-full flex h-[100dvh] overflow-hidden">{children}</div>
    </ApolloProvider>
  );
}
