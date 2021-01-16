import React, {useState, useEffect } from 'react';
import {
  Container,
  Title,
  Adicionar,
} from './styles'


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../../services/api';

import Product from '../../model/Product';

const ProductList: React.FC = ()=> {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');

  async function handleListProducts(){
    const response = await api.get<Product[]>('/products', { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })

    setProducts(response.data);
    console.log(response.data);
  }

  async function handleAddProduct(){
    const response = await api.post<Product>('/products',{ name: name }, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA3NDc5ODIsImV4cCI6MTYxMDgzNDM4Miwic3ViIjoiYWM0MTI5MzMtZWYxYi00NzY4LWJjYjMtMjY3ZTMyN2NhYTczIn0.QKtlZRltgStS0ANac3kvJQBuzbvLkaUAwiUuzjGOKrs' } })
    
    console.log(response);

    handleListProducts();
  }

  useEffect(()=>{
    handleListProducts();
  }, []);


//Listar todos os produtos que estiver na API 
  return(
    <Container>

      <Title>
        Lista de produtos 
      </Title>

      <Adicionar>
        <TextField
            id="nomeProduto"
            label="Nome do produto"
            defaultValue="" 
            onChange={(e) => {setName(e.target.value)}} 
          />
        
        <Button className="Button" onClick={() => { handleAddProduct() }} variant="contained">Adicionar</Button>
      </Adicionar>
      
 
      <List className="List" component="nav" aria-label="secondary mailbox folder">
        {products.map(product=> (
          <ListItem className="ListItem" key={product.id} id={product.id} button href={`/product/${product.id}`} component="a">
            <ListItemText className="" primary={product.name} >
               
            </ListItemText>
          </ListItem>
        ))}  
      </List>
   
    </Container> 
  ) 
}

export default ProductList;