import React from 'react';
import ReactDOM from 'react-dom/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { Container } from './components';
import { useTestQuery } from './graphql/generated/schema';

const App = (): React.ReactElement => {
  const { data: testData } = useTestQuery();

  return (
    <div>
      <Container>
        {
          testData?.test ? (
            <p>{testData.test}</p>
          ) : (
            <p>loading...</p>
          )
        }
      </Container>
    </div>
  );
};

const apiUri = import.meta.env.VITE_APP_API;

const httpLink = createHttpLink({
  credentials: 'same-origin',
  uri: `${apiUri}`,
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      'X-CSRF-TOKEN': token || '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>,
);
