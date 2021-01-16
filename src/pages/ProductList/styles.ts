import styled from 'styled-components';

export const Container = styled.div`
  background-color:lightblue;
  display: flex;
  flex-direction:column;
  border-radius: 15px;
  padding: 20px;
  align-items: center;


  .List{
    display: flex;
    flex-direction: column; 

  }

  .ListItem{
    border: 1px solid;
    width: 400px;
    border-radius: 100px 100px 100px 100px;
    background-color: #88BC23;
    margin-top:20px;
    display: flex;
    
  }

  .ListItemText{
    justify-content: center;
    align-items: center;
  }

`;

export const Title = styled.div`
  font-size:48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Adicionar = styled.form`
  display:flex;
  width: 400px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:20px;

  .Button{
    background-color: green;
    color: white;
  }
`;

