import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const HomeSingleProduct = () => {
  const [{ product }, dispatch] = useStateValue();
  console.log({ product });
  console.log(product.image);
  return (
    <div>
      <Link to="/homeproduct">
        <img src={product[0].image} alt="" />
      </Link>
      <p>{product[0].title}</p>
    </div>
  );
};

export default HomeSingleProduct;
