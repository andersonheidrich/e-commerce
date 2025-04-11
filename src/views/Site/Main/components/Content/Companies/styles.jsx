import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    width: 90%;
    min-height: 100%;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 90%;
  }

  .item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    width: 100%;

    img {
      padding: 16px;
      width: 300px;
      height: 200px;
      min-width: 10%;
      min-height: 10%;
      /* width: 80%;
      height: auto; */
    }

    span {
      margin: 32px 0 12px 0;
      font-weight: bold;
    }
  }

  .item-actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .plus-less {
      cursor: pointer;
    }

    .buy {
      background-color: #ff8c00;
      color: black;
      font-weight: bold;
      margin-right: 32px;
    }
  }
`;
