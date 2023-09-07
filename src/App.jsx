import { BrowserRouter, Routes, Route } from "react-router-dom";

import InicioPage from "@/pages/InicioPage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <Routes>
          <Route path="/" element={<InicioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
