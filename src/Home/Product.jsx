import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ id, title, image, price, rating }) => {

  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  const addToBasket = () => {
    //dispatch the item into the data Layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const handleGoToProduct = ()=>{
    dispatch({
      type: 'PRODUCT_DETAILS',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} style={{ color: 'yellow' }} />
              // <p key={index}>^_^</p>
            ))}
        </div>
      </div>

      <Link to="/homeproduct">
        <img onClick={handleGoToProduct} src={image} alt="" />
      </Link>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
