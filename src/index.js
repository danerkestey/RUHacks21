/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SettingsProvider } from "./settings";
import "./useSettings";

const { settings, saveSettings } = useSettings();

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
