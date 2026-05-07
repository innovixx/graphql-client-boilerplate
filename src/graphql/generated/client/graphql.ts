/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  JSON: { input: any; output: any; }
};

export type CreateTestInput = {
  text: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTest: Test;
  deleteTest: Scalars['Boolean']['output'];
  updateTest: Test;
};


export type MutationCreateTestArgs = {
  input?: InputMaybe<CreateTestInput>;
};


export type MutationDeleteTestArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTestArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<CreateTestInput>;
};

export type PaginatedDocs = {
  total: Scalars['Int']['output'];
};

export type PaginatedTests = PaginatedDocs & {
  __typename?: 'PaginatedTests';
  items?: Maybe<Array<Test>>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  test: Test;
  tests: PaginatedTests;
};


export type QueryTestArgs = {
  id: Scalars['String']['input'];
};


export type QueryTestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
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
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Where = {
  and?: InputMaybe<Array<InputMaybe<Where>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Where>>>;
  relation?: InputMaybe<RelationWhere>;
  value?: InputMaybe<WhereField>;
};

export type WhereField = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<WhereFieldMode>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Scalars['JSON']['input']>;
};

export enum WhereFieldMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type TestQueryVariables = Exact<{
  testId: Scalars['String']['input'];
}>;


export type TestQuery = { __typename?: 'Query', test: { __typename?: 'Test', id: string } };

export type TestsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Where>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type TestsQuery = { __typename?: 'Query', tests: { __typename?: 'PaginatedTests', items?: Array<{ __typename?: 'Test', id: string, text: string }> | null } };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Test"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
export const TestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<TestsQuery, TestsQueryVariables>;