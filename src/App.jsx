import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
