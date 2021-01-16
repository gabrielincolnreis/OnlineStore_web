import React, {useEffect, useState} from 'react';


import {
  Container,
  ProductItem,
  Title,
} from './styles'

import api from '../../services/api';
import Product from '../../model/Product';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



import { RouteComponentProps, useHistory } from "react-router-dom";

interface RouteParams {
  id: string
}

interface MyComponent extends RouteComponentProps<RouteParams> {
}

const ProductScreen: React.FC<MyComponent> = (props)=> {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [name, setName] = useState<string>('');

  const history = useHistory();

  async function handleListProducts(){
    const response = await api.get<Product>(`/products/${props.match.params.id}`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    console.log(response.data);
    setProduct(response.data);
  }
  
  async function handleUpdateProduct(){
    const response = await api.put<Product>(`/products/${props.match.params.id}`,{ name: name }, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    
    console.log(response.data);
    setProduct(response.data);

    history.push('/');

  }
  
  async function handleDeleteProduct(){
    const response = await api.delete<Product>(`/products/${props.match.params.id}`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    console.log(response.data);
    setProduct(response.data);
    
    history.push('/');

  }
  

  useEffect(()=>{
    handleListProducts();
  }, []);


// Editar o Produto selecionado
  return(
    <Container>
      <Title>
        Produto 
      </Title>

      {!product ? ( "carregando dados") : (
        
          <ProductItem>
           
            <TextField
              id="nomeProduto"
              label="Nome do produto"
              defaultValue={product?.name}
              onChange={(e) => {setName(e.target.value)}} 
            />

            <Button className="ButtonUpdate" onClick={() => { handleUpdateProduct() }} variant="contained">Alterar</Button>
            <Button className="ButtonDelete" onClick={() => { handleDeleteProduct() }} variant="contained">Deletar</Button>
            


          </ProductItem>
        )
      }
    </Container>
    
  ) 
}

export default ProductScreen;