import Router from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <div className="fixed left-0 min-h-screen top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Toaster position="top-right" />
      <Router />
    </>
  );
}

export default App;
