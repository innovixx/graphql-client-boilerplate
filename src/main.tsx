import React from 'react';
import ReactDOM from 'react-dom/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import './styles/index.scss';
import './styles/globals/index.scss';
import './styles/reset/index.scss';
import { useTestsQuery } from './graphql/generated/schema';
import { Container } from './components';

const App = (): React.ReactElement => {
	const { data: testData } = useTestsQuery();

	return (
		<div>
			<Container>
				{
					(testData?.tests !== undefined) ? (
						testData?.tests?.items?.map((test) => (
							<div key={test.id}>
								<p>{test.text}</p>
							</div>
						))
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
	credentials: 'include',
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
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
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
