import styled from 'styled-components';

export const Container = styled.div`
  background-color:lightblue;
  display: flex;
  flex-direction:column;
  border-radius: 15px;
  padding: 20px;
  align-items: center;
`;

export const Title = styled.div`
  font-size:48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductItem = styled.div`
  display:flex;
  max-width: 400px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:50px;

  

  .ButtonUpdate{
    background-color: green;
    color: white;
    margin:5px;
  }
  .ButtonDelete {
    background-color: red;
    color: white;
    margin:5px;

  }
`;

