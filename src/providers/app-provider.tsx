import { ErrorBoundary } from "@/components/error/error-boundary";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
/**
 * App Provider component
 * @param children - React children
 * @returns App Provider component
 */
function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ApolloWrapper>{children}</ApolloWrapper>
    </ErrorBoundary>
  );
}
export default AppProvider;
