export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  JSON: { input: any; output: any; }
  Upload: { input: unknown; output: unknown; }
};

export type CreateTestInput = {
  text: Scalars['String']['input'];
};

export type DateFilter = {
  equals?: InputMaybe<Scalars['Date']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
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

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  mode?: InputMaybe<WhereFieldMode>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Test = {
  __typename?: 'Test';
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type TestListRelationFilter = {
  every?: InputMaybe<TestScalarWhereInput>;
  none?: InputMaybe<TestScalarWhereInput>;
  some?: InputMaybe<TestScalarWhereInput>;
};

export type TestRelationFilter = {
  is?: InputMaybe<TestScalarWhereInput>;
  isNot?: InputMaybe<TestScalarWhereInput>;
};

export type TestScalarWhereInput = {
  AND?: InputMaybe<Array<TestScalarWhereInput>>;
  OR?: InputMaybe<Array<TestScalarWhereInput>>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type TestWhereInput = {
  AND?: InputMaybe<Array<TestWhereInput>>;
  OR?: InputMaybe<Array<TestWhereInput>>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
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
