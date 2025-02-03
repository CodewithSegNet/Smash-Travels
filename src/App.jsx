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
import Germany from "./pages/germany";
import Luxembourg from "./pages/luxembourg";
import Croatia from "./pages/croatia";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/passport-services" element={<PassportPage />} />
          <Route path="/job-new-zealand" element={<NewZealand />} />
          <Route path="/job-netherlands" element={<Netherlands />} />
          <Route path="/job-canada" element={<Canada />} />
          <Route path="/job-norway" element={<Norway />} />
          <Route path="/job-denmark" element={<Denmark />} />
          <Route path="/job-germany" element={<Germany />} />
          <Route path="/job-luxembourg" element={<Luxembourg />} />
          <Route path="/job-croatia" element={<Croatia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
