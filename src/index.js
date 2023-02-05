import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AuthContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider>
  </HashRouter>
);
