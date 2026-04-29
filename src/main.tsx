
import { createRoot } from "react-dom/client";
import { ReactLenis } from "@studio-freight/react-lenis";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ReactLenis root options={{ lerp: 0.3, wheelMultiplier: 1.15 }}>
    <App />
  </ReactLenis>
);
