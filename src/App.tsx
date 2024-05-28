import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const Layout = () => {
    return (
      <Box width="100%" maxWidth="1200px">
        <Header />
        <Outlet />
        <Footer />
      </Box>
    );
  };

  return (
    <Flex alignItems="center" flexDir="column">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route /> */}
        </Route>
      </Routes>
    </Flex>
  );
}

export default App;
