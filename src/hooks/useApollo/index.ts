import { useEffect, useRef } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client/react';
import type { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client';

type ErrorLike = {
	message: string;
};

type ErrorHandler = (error: ErrorLike) => void;
type CompletedHandler<TData> = (data: TData) => void;

type QueryOptionsWithHandlers<TData, TVariables extends OperationVariables> = Omit<useQuery.Options<TData, TVariables>, 'onError' | 'onCompleted' | 'returnPartialData' | 'errorPolicy'> & {
	errorPolicy?: 'none';
	onCompleted?: CompletedHandler<TData>;
	onError?: ErrorHandler;
};

type LazyQueryOptionsWithHandlers<TData, TVariables extends OperationVariables> = Omit<useLazyQuery.Options<TData, TVariables>, 'onError' | 'onCompleted' | 'returnPartialData' | 'errorPolicy'> & {
	errorPolicy?: 'none';
	onCompleted?: CompletedHandler<TData>;
	onError?: ErrorHandler;
};

type CompleteQueryResult<TData, TVariables extends OperationVariables> = Omit<useQuery.Result<TData, TVariables>, 'data'> & {
	data: TData | undefined;
};

type CompleteLazyQueryResultTuple<TData, TVariables extends OperationVariables> = [
	useLazyQuery.ResultTuple<TData, TVariables>[0],
	Omit<useLazyQuery.ResultTuple<TData, TVariables>[1], 'data'> & { data: TData | undefined },
];

export const useAppQuery = <TData, TVariables extends OperationVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: QueryOptionsWithHandlers<TData, TVariables>): CompleteQueryResult<TData, TVariables> => {
	const previousErrorMessageRef = useRef<string | undefined>(undefined);
	const previousDataRef = useRef<TData | undefined>(undefined);
	const { onError, onCompleted, ...queryOptions } = options ?? {};
	const result = useQuery(query, queryOptions as useQuery.Options<TData, TVariables>) as CompleteQueryResult<TData, TVariables>;

	useEffect(() => {
		const currentErrorMessage = result.error?.message;

		if (result.error && onError && currentErrorMessage !== previousErrorMessageRef.current) {
			onError(result.error as ErrorLike);
		}

		previousErrorMessageRef.current = currentErrorMessage;
	}, [result.error, onError]);

	useEffect(() => {
		if (result.data && onCompleted && result.data !== previousDataRef.current) {
			onCompleted(result.data);
		}

		previousDataRef.current = result.data;
	}, [result.data, onCompleted]);

	return result;
};

export const useAppLazyQuery = <TData, TVariables extends OperationVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: LazyQueryOptionsWithHandlers<TData, TVariables>): CompleteLazyQueryResultTuple<TData, TVariables> => {
	const previousErrorMessageRef = useRef<string | undefined>(undefined);
	const previousDataRef = useRef<TData | undefined>(undefined);
	const { onError, onCompleted, ...lazyQueryOptions } = options ?? {};
	const lazyQueryResult = useLazyQuery(query, lazyQueryOptions as useLazyQuery.Options<TData, TVariables>) as CompleteLazyQueryResultTuple<TData, TVariables>;
	const [, result] = lazyQueryResult;

	useEffect(() => {
		const currentErrorMessage = result.error?.message;

		if (result.error && onError && currentErrorMessage !== previousErrorMessageRef.current) {
			onError(result.error as ErrorLike);
		}

		previousErrorMessageRef.current = currentErrorMessage;
	}, [result.error, onError]);

	useEffect(() => {
		if (result.data && onCompleted && result.data !== previousDataRef.current) {
			onCompleted(result.data);
		}

		previousDataRef.current = result.data;
	}, [result.data, onCompleted]);

	return lazyQueryResult;
};
