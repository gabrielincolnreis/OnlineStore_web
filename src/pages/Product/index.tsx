import React, {useEffect, useState} from 'react';

import {
  Container,
  ProductItem,
  Name,
} from './styles'

import api from '../../services/api';
import Product from '../../model/Product';

import { RouteComponentProps } from "react-router-dom";

interface RouteParams {
  id: string
}

interface MyComponent extends RouteComponentProps<RouteParams> {
}

const ProductScreen: React.FC<MyComponent> = (props)=> {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  
  async function handleListProducts(){
    const response = await api.get<Product>(`/products/${props.match.params.id}`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    console.log(response.data);
    setProduct(response.data);
  }

  useEffect(()=>{
    handleListProducts();
  }, []);


// Editar o Produto selecionado
  return(
    <Container>
      <ProductItem>
        <Name>
          {product?.name}
        </Name>
      </ProductItem>
    </Container> 
  ) 
}

export default ProductScreen;