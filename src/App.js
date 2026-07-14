import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import { getProduct } from "./db/Api";
import ProductManage from "./components/ProductManage";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await getProduct();

      console.log("response: ", response);
      setData(response.data ?? []);
    };

    loadData();

    return (
      setData([])
    )
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Card data={data} />}/>
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product-manage" element={<ProductManage />} />
      </Routes>
    </div>
  );
}

export default App;
