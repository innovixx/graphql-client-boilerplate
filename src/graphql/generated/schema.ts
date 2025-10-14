import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type TestQueryVariables = Exact<{
  testId: Scalars['String'];
}>;


export type TestQuery = { __typename?: 'Query', test: { __typename?: 'Test', id: string } };

export type TestsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Where>;
  sortBy?: InputMaybe<Scalars['String']>;
}>;


export type TestsQuery = { __typename?: 'Query', tests: { __typename?: 'PaginatedTests', items?: Array<{ __typename?: 'Test', id: string, text: string }> | null } };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type CreateTestInput = {
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTest: Test;
  deleteTest: Scalars['Boolean'];
  updateTest: Test;
};


export type MutationCreateTestArgs = {
  input?: InputMaybe<CreateTestInput>;
};


export type MutationDeleteTestArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTestArgs = {
  id: Scalars['String'];
  input?: InputMaybe<CreateTestInput>;
};

export type PaginatedDocs = {
  total: Scalars['Int'];
};

export type PaginatedTests = PaginatedDocs & {
  __typename?: 'PaginatedTests';
  items?: Maybe<Array<Test>>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  test: Test;
  tests: PaginatedTests;
};


export type QueryTestArgs = {
  id: Scalars['String'];
};


export type QueryTestsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Where>;
};

export type RelationWhere = {
  every?: InputMaybe<Where>;
  is?: InputMaybe<Where>;
  isNot?: InputMaybe<Where>;
  none?: InputMaybe<Where>;
  some?: InputMaybe<Where>;
};

export type Test = {
  __typename?: 'Test';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  text: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Where = {
  and?: InputMaybe<Array<InputMaybe<Where>>>;
  field?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Where>>>;
  relation?: InputMaybe<RelationWhere>;
  value?: InputMaybe<WhereField>;
};

export type WhereField = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<WhereFieldMode>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Scalars['JSON']>;
};

export enum WhereFieldMode {
  Default = 'default',
  Insensitive = 'insensitive'
}


export const TestDocument = gql`
    query Test($testId: String!) {
  test(id: $testId) {
    id
  }
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *      testId: // value for 'testId'
 *   },
 * });
 */
export function useTestQuery(baseOptions: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options);
      }
export function useTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, options);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
export const TestsDocument = gql`
    query Tests($limit: Int, $offset: Int, $where: Where, $sortBy: String) {
  tests(limit: $limit, offset: $offset, where: $where, sortBy: $sortBy) {
    items {
      id
      text
    }
  }
}
    `;

/**
 * __useTestsQuery__
 *
 * To run a query within a React component, call `useTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useTestsQuery(baseOptions?: Apollo.QueryHookOptions<TestsQuery, TestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestsQuery, TestsQueryVariables>(TestsDocument, options);
      }
export function useTestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestsQuery, TestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestsQuery, TestsQueryVariables>(TestsDocument, options);
        }
export type TestsQueryHookResult = ReturnType<typeof useTestsQuery>;
export type TestsLazyQueryHookResult = ReturnType<typeof useTestsLazyQuery>;
export type TestsQueryResult = Apollo.QueryResult<TestsQuery, TestsQueryVariables>;