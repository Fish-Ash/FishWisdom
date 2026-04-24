import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
