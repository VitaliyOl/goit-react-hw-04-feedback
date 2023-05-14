import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  margin: 20px 0;
  justify-content: space-evenly;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  width: 70px;
  height: 30px;

  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: black;
  margin-right: 20px;

  background-color: green;

  &:hover {
    color: white;
  }
`;
