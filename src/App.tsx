import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Page from "./pages/Page";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </>
  );
}

export default App;
