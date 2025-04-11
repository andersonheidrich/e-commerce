import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 16px 0;
`;

export const Cart = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px;
  overflow-y: auto;

  span {
    font-weight: bold;
    margin-top: 16px;
  }

  .cart-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 260px;
    margin-bottom: 32px;
    border: 2px solid black;
    border-radius: 8px;
  }

  .cart-item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    img {
      width: 160px;
      height: 120px;
    }
  }

  .remove-button {
    cursor: pointer;
  }
`;
