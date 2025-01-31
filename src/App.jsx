import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import PassportPage from "./pages/passportpage";
import JobNewZealand from "./pages/newZealand";
import WorkVisa from "./pages/workvisapage";


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
          <Route path="/work-visa" element={<WorkVisa />} />
          <Route path="/job-new-zealand" element={<JobNewZealand />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
