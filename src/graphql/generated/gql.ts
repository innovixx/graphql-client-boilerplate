/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query Test($testId: String!) {\n  test(id: $testId) {\n    id\n  }\n}\n\nquery Tests($limit: Int, $offset: Int, $where: Where, $sortBy: String) {\n  tests(limit: $limit, offset: $offset, where: $where, sortBy: $sortBy) {\n    items {\n      id\n      text\n    }\n  }\n}": typeof types.TestDocument,
};
const documents: Documents = {
    "query Test($testId: String!) {\n  test(id: $testId) {\n    id\n  }\n}\n\nquery Tests($limit: Int, $offset: Int, $where: Where, $sortBy: String) {\n  tests(limit: $limit, offset: $offset, where: $where, sortBy: $sortBy) {\n    items {\n      id\n      text\n    }\n  }\n}": types.TestDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Test($testId: String!) {\n  test(id: $testId) {\n    id\n  }\n}\n\nquery Tests($limit: Int, $offset: Int, $where: Where, $sortBy: String) {\n  tests(limit: $limit, offset: $offset, where: $where, sortBy: $sortBy) {\n    items {\n      id\n      text\n    }\n  }\n}"): (typeof documents)["query Test($testId: String!) {\n  test(id: $testId) {\n    id\n  }\n}\n\nquery Tests($limit: Int, $offset: Int, $where: Where, $sortBy: String) {\n  tests(limit: $limit, offset: $offset, where: $where, sortBy: $sortBy) {\n    items {\n      id\n      text\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;