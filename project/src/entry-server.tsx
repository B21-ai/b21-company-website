import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export function render(path = "/") {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}
