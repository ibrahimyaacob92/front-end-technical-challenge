import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-2">
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
