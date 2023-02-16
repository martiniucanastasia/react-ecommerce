import { Global } from "./styles/global";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
