import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Subtotal = () => {
    const [{basket} , dispatch] = useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=> (
                <>
                    <p>Subtotal ({basket.length} items):
                    <strong>{` ${value}`}</strong>
                    </p>
                    
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This Order contains a gift 
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}  //  (y.qty *)getBasketTotal(basket)
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to</button>
    </div>
  )
}

export default Subtotal;


/**
 * <p>
                         Part of the home *
                        Subtotal (0 items): <strong>0</strong>
                    </p>
 */