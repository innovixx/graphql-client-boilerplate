import React from 'react';
import ReactDOM from 'react-dom/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { Container } from './components';
import { useTestQuery } from './graphql/generated/schema';
import './styles/index.scss';
import './styles/globals/index.scss';
import './styles/reset/index.scss';

const App = (): React.ReactElement => {
  const { data: testData } = useTestQuery();

  return (
    <div>
      <Container>
        {
          (testData?.test !== undefined) ? (
            <p>{testData.test}</p>
          ) : (
            <p>loading...</p>
          )
        }
      </Container>
    </div>
  );
};

const apiUri = `${import.meta.env.VITE_APP_API}`;

const httpLink = createHttpLink({
  credentials: 'same-origin',
  uri: apiUri,
});

const authLink = setContext((_, { headers = {} }: { headers?: Record<string, string> }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      'X-CSRF-TOKEN': `${token}`,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
  );
}
