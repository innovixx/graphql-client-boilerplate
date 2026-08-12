import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client/react';
import './styles/index.scss';
import './styles/globals/index.scss';
import './styles/reset/index.scss';
import { Container } from './components';
import { TestsDocument } from './graphql/generated/graphql';
import { useAppQuery } from './hooks/useApollo';

const App = (): React.ReactElement => {
	const { data: testsData } = useAppQuery(TestsDocument, {
		onError: (error) => {
			console.error('Error fetching tests:', error);
		},
		variables: {
			limit: 10,
		},
	});

	return (
		<div>
			<Container>
				{
					(testsData?.tests !== undefined) ? (
						testsData?.tests?.items?.map((test) => (
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

const httpLink = new HttpLink({
	credentials: 'include',
	uri: apiUri,
});

const authLink = new SetContextLink((prevContext, _) => {
	const token = sessionStorage.getItem('token');
	return {
		headers: {
			...prevContext.headers,
			'X-CSRF-TOKEN': token,
		},
	};
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
		},
		query: {
			fetchPolicy: 'no-cache',
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
