import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import { Homepage, NotFoundPage } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
