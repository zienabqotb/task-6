import './App.css'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MainStore } from "./stores/MainStore.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainStore>
      <App />
    </MainStore>
  </BrowserRouter>,
);
