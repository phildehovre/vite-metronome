import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Page from "./pages/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Page />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
