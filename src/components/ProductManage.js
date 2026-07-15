import React, { useEffect, useState } from "react";
import { addProduct, deleteProduct, getProduct } from "../db/Api";

const ProductManage = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  //   const [add, setAdd] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await getProduct();
      console.log("response: ", response);
      setData(response.data ?? []);
    };

    loadData();
    // setCate([...new Set(data.map((item) => item.category))]);
  }, []);

  //     {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     "rating": {
  //         "rate": 3.9,
  //         "count": 120
  //     }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("e: ", e.target.title.value)

    const objData = {
      title: title,
      image: image,
      description: description,
      price: Number(price),
      category: category,
    };

    console.log("objData: ", objData);
    try {
      const request = await addProduct(objData);
      // console.log("request: ", request);

      setData([...data, request.data]);
      alert("Thêm thành công!");
    } catch (error) {}
    // setAdd(request);
    alert("Thêm thất bại!");
  };

  const delProduct = async (id) => {
    // console.log("id: ", id);
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      try {
        const request = await deleteProduct(id);
        console.log("request: ", request);
        // console.log("id: ", data.filter((item) => item.id !== request.data.id))
        setData(data.filter((item) => item.id !== request.data.id));

        alert("Xóa thành công!");
        console.log("data: ", data);
      } catch (error) {
        alert("Xóa thất bại!");
      }
    }
  };

  return (
    <div className="manager">
      <section>
        <form onSubmit={handleSubmit}>
          <div className="itemForm">
            <h3>Thêm sản phẩm</h3>
          </div>
          <div className="itemForm">
            <label htmlFor="title">Tên sản phẩm: </label>
            <input
              type="text"
              name=""
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="itemForm">
            <label htmlFor="image">Hình ảnh: </label>
            <input
              type="text"
              name=""
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="itemForm">
            <label htmlFor="description">Mô tả: </label>
            <input
              type="text"
              name=""
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="itemForm">
            <label htmlFor="price">Giá: </label>
            <input
              type="number"
              name=""
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="itemForm">
            <label htmlFor="category">Loại: </label>
            <input
              type="text"
              name=""
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <button className="itemForm detail-btn">Xác nhận</button>
        </form>
      </section>

      <table border={2}>
        <thead>
          <tr>
            <th className="col1">ID</th>
            <th className="col2">Hình ảnh</th>
            <th className="col3">Tên sản phẩm</th>
            <th className="col4">Mô tả</th>
            <th className="col5">Loại</th>
            <th className="col6">Giá</th>
            <th className="col7">Đánh giá %</th>
            <th className="col8">Lượng đánh giá</th>
            <th className="col9">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            <>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="col1">{item.id}</td>
                  <td className="col2">
                    <img
                      className="img-manage"
                      src={item.image}
                      width={50}
                      height={50}
                      alt=""
                    />
                  </td>
                  <td className="col3">{item.title}</td>
                  <td className="col4">{item.description}</td>
                  <td className="col5">{item.category}</td>
                  <td className="col6">${item.price}</td>
                  <td className="col7">
                    {item?.rating?.rate >= 0 ? item.rating.rate : 0}
                  </td>
                  <td className="col8">
                    {item?.rating?.count >= 0 ? item.rating.count : 0}
                  </td>
                  <td className="col9">
                    <button
                      className="detail-btn"
                      onClick={() => delProduct(item.id)}
                    >
                      Xác nhận
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManage;
