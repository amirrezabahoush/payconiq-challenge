import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/index';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<p className="p-2">Loading...</p>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
