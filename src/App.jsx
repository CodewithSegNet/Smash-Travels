import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import PassportPage from './pages/passportpage';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
