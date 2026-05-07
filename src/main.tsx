import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ApolloProvider, useQuery } from '@apollo/client/react';
import './styles/index.scss';
import './styles/globals/index.scss';
import './styles/reset/index.scss';
import { Container } from './components';
import type { TestsQuery, TestsQueryVariables } from './graphql/generated/graphql';
import { TestsDocument } from './graphql/generated/graphql';

const App = (): React.ReactElement => {
	const { data: testData, error: testError } = useQuery<TestsQuery, TestsQueryVariables>(TestsDocument, {
		variables: {
			limit: 10,
		},
	});

	useEffect(() => {
		if (testError) {
			console.error('Error fetching tests:', testError);
		}
	});

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
