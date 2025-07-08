import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { domain } from '.';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({ uri: `${domain}/graphql` });

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('jwt');
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
