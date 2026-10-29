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
import './styles/reset.scss';
import { Container } from './components';
import { TestsDocument } from './graphql/generated/graphql';
import { useAppQuery } from './hooks/useApollo';

const App = (): React.ReactElement => {
	const { data: testsData, loading: testsLoading, error: testsError } = useAppQuery(TestsDocument, {
		onError: (queryError) => {
			console.error('Error fetching tests:', queryError);
		},
		variables: {
			limit: 10,
		},
	});

	if (testsLoading) {
		return (
			<Container>
				<p role="status">Loading tests...</p>
			</Container>
		);
	}

	if (testsError) {
		return (
			<Container>
				<p role="alert">
					Unable to load tests. Please try again later.
				</p>
			</Container>
		);
	}

	const tests = testsData?.tests?.items;

	if (tests == null) {
		return (
			<Container>
				<p role="alert">The server did not return the expected test data.</p>
			</Container>
		);
	}

	return (
		<Container>
			{tests.length === 0 ? (
				<p>No tests found.</p>
			) : (
				tests.map((test) => (
					<div key={test.id}>
						<p>{test.text}</p>
					</div>
				))
			)}
		</Container>
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
