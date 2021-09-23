import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px;

  background-color: #cea9a1;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  color: #452c27;
  text-transform: uppercase;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;

  background-color: #452c27;
  color: #c69a91;

  border-radius: 10px;
  border: 5px;
  cursor: pointer;
  transition: all 0.25s linear 0s;

  &:hover {
    background: #cea9a1;
    color: #452c27;
    box-shadow: inset 0 0 0 1px #452c27;
  }
`;

export const List = styled.li`
  margin: 0 10px;
  display: inline-flex;
  justify-content: center;
  text-align: center;

  list-style: none;
`;
