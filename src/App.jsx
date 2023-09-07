import { BrowserRouter, Routes } from "react-router-dom";

// import InicioPage from "./pages/InicioPage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/PortafolioV5">
        <Routes>{/* <Route path="/" element={<InicioPage />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
