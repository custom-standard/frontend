import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";

function App() {
  const Layout = () => {
    return (
      <div className="flex flex-col w-full items-center min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <div className="flex items-center flex-col">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {/* <Route /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
