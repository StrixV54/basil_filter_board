import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Orders from "./components/pages/Orders";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import OrderDetails from "./components/pages/OrderDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/order" replace={true} />} />
            <Route path="order" element={<Orders />} />
            <Route path="order/:order_id" element={<OrderDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
