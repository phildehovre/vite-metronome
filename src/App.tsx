import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Page from "./pages/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route element={<Page />} index path="/" />
            <Route element={<About />} index path="/about" />
            <Route element={<Contact />} index path="/contact" />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
