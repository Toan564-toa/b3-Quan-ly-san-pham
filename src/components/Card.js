import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  console.log("data: ", data);

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


  return (
    <div className="card">
      {data?.map((item, index) => (
        <Link key={item.id} className="item" to={`/product-detail/${item.id}`}>
          <div className="cardItem">
            <img className="image" src={item.image} alt="" />
            <div className="star">
              <span className="rate">{item.rating.rate}</span>
            </div>
            <div className="cardDesc">
              <h3>{item.title}</h3>
              <h3 className="price">{item.price} $</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
