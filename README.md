# GraphQL Client Boilerplate

This is a basic structure for building clients to connect to GraphQL servers. It provides a starting point for developers to build their own GraphQL clients using popular libraries like Apollo and React.

## Features

- Uses Apollo Client to interact with GraphQL servers
- Includes React Hooks for making GraphQL requests in React components
- Uses GraphQL Code Generator to generate TypeScript types for GraphQL operations
- Provides a basic folder structure for organizing files

## Getting Started

1. Clone this repository:

  ```bash
   git clone git@github.com:innovixx/graphql-client-boilerplate.git
   ```

2. Install dependencies: 

		```bash
		pnpm install
		```
3. Start the development server: 

		```bash
  	pnpm dev
   	```
4. Generate TypeScript types for GraphQL operations: 

		```bash
   	pnpm codegen
   	```
5. Build for production: 

		```bash
   	pnpm build
   	```