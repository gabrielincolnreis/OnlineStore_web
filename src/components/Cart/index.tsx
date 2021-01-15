import React from 'react';
import {Container, ProductList, ProductItem} from './styles'
import Product from '../../model/Product'


const Cart: React.FC<{product: Product}> = ({ product })=> {
  return( 
    <Container>
      <ProductList>
        <ProductItem>
          {product.name}
        </ProductItem>
      </ProductList>  
    </Container>
  ) 
}

export default Cart;

