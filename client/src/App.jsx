import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-950">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
