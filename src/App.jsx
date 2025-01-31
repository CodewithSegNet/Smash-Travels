import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import PassportPage from "./pages/passportpage";
import JobNewZealand from "./pages/newZealand";
import JobNetherlands from "./components/JobNetherlands";
import NewZealand from "./pages/newZealand";
import Netherlands from "./pages/netherlands";
import Canada from "./pages/canada";
import Norway from "./pages/norway";
import Denmark from "./pages/denmark";

function App() {
  return (
    <div>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/passport-services" element={<PassportPage />} />
          <Route path="/job-new-zealand" element={<NewZealand />} />
          <Route path="/job-netherlands" element={<Netherlands />} />
          <Route path="/job-canada" element={<Canada />} />
          <Route path="/job-norway" element={<Norway />} />
          <Route path="/job-denmark" element={<Denmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
