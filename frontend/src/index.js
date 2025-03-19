import { AuthProvider } from "./context/AuthContext";
import { ContestProvider } from "./context/ContestContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { ThemeProviderComponent } from "./context/ThemeContext";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ThemeProviderComponent>
      <AuthProvider>
        <ContestProvider>
          <BookmarkProvider>
            <App />
          </BookmarkProvider>
        </ContestProvider>
      </AuthProvider>
    </ThemeProviderComponent>
  
);
