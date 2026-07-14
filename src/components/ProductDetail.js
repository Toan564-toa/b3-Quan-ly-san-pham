import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../db/Api";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log("id: ", id);
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await getProductDetail(id);
      // console.log("response: ", response);
      setData(response.data ?? []);
    };

    loadData();
  }, []);

  return (
    <div className="detail">
      {data && (
        <>
          <img className="img-detail" src={data.image} alt="" />
          <section className="desc-detail">
            <h1 className="detail-item">{data.title}</h1>
            <p className="detail-item">{data.description}</p>
            <p className="detail-item price"><span>${data.price}</span> <button className="detail-btn">Thêm</button></p>
          </section>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
