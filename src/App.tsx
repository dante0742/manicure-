import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Account from "./pages/Account";
import Customers from "./pages/Customers";
import Categories from "./pages/Categories";
import Staff from "./pages/Staff";
import Login from "./pages/Login";
import routes from "tempo-routes";
import MainLayout from "./components/layout/MainLayout";
import PaymentEntry from "./pages/PaymentEntry";
import ReportingTools from "./pages/ReportingTools";
import BalanceTracker from "./pages/BalanceTracker";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout><Home /></MainLayout>} path="/" />
          <Route element={<MainLayout><Account /></MainLayout>} path="/account" />
          <Route element={<MainLayout><Customers /></MainLayout>} path="/customers" />
          <Route element={<MainLayout><Categories /></MainLayout>} path="/categories" />
          <Route element={<MainLayout><Staff /></MainLayout>} path="/staff" />
          <Route element={<MainLayout><PaymentEntry /></MainLayout>} path="/payment-entry" />
          <Route element={<MainLayout><ReportingTools /></MainLayout>} path="/reporting-tools" />
          <Route element={<MainLayout><BalanceTracker /></MainLayout>} path="/balance-tracker" />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
