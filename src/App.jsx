import React from "react";
import { Layout } from "./components";
import NavRoutes from "./routes/NavRoutes/NavRoutes";

function App() {
  return (
    <>
      <Layout>
        <NavRoutes />
      </Layout>
    </>
  );
}

export default App;