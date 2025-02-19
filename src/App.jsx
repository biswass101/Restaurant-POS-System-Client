import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/tables" element={<Tables/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="*" element={<div>Route not Found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
