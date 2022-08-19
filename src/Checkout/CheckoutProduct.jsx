import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, price, rating }) => {


    const [state , dispatch] = useStateValue();
    
    const handleRemoveBasket = ()=> {
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="checkoutProduct">
      
      <img className="checkoutProduct__image" src={image} alt="" />
      
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
            {Array(rating).fill().map((_,index)=>(
                <StarIcon key={index} style={{color: '#f0c14b'}}/>
            ))}
        </div>
        <button onClick={handleRemoveBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
