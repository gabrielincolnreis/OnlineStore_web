import React, {useState, useEffect } from 'react';
import {
  Container,
  Title,
} from './styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import api from '../../services/api';

import Product from '../../model/Product';

const Login: React.FC = ()=> {
  const [products, setProducts] = useState<Product[]>([]);

  async function handleListProducts(){
    const response = await api.get<Product[]>('/products', { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    setProducts(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    handleListProducts();
  }, []);


//Listar todos os produtos que estiver na API 
  return(
    <Container>
      <Title>
        Lista de produtos disponiveis
      </Title>
 
      <List component="nav" aria-label="secondary mailbox folder">
        {products.map(product=> (
          <ListItem key={product.id} id={product.id} button href={`/product/${product.id}`} component="a">
            <ListItemText primary={product.name} >
               
            </ListItemText>
          </ListItem>
        ))}  
      </List>

      
    </Container> 
  ) 
}

export default Login;