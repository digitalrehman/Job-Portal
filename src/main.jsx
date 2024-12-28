import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import ContextAPI from "./context/ContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ContextAPI>
          <App />
        </ContextAPI>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);