import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/despesas" element={<Expenses />} />
      </Route>
    </Routes>
  );
}
