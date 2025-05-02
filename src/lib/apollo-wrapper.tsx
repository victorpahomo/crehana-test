"use client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { HttpLink } from "@apollo/client";
import { env } from "@/config/env";

const API_URL = env.apiBaseUrl;

function makeClient() {
  const httpLink = new HttpLink({
    uri: API_URL,
    fetchOptions: {},
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

/**
 * Apollo Wrapper component
 * @param children - React children
 * @returns Apollo Wrapper component
 */
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
