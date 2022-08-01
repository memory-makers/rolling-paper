import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/app.scss";
import { Routes } from "./pages/Routes";
import { ThemeProvider } from "./store/theme";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
