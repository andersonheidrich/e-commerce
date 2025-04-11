import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 164px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ff8c00;
  position: fixed;
  z-index: 1000;
`;

export const Navigation = styled.div`
  display: flex;
  width: 86%;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.div`
  width: 180px;

  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .user-nav {
    display: flex;
  }

  .user-menu-item {
    display: flex;
    font-weight: bold;
    /* color: #1e3a5f; */
    color: black;
    padding: 8px;
    margin: 0 8px 16px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      color: #ff8c00;
      /* background-color: #1e3a5f; */
      background-color: black;
    }
  }

  .store-nav {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .store-menu-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    margin: 0 8px 0 8px;

    img {
      cursor: pointer;
      background-color: black;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
    }

    span {
      margin-top: 4px;
      font-size: 18px;
      font-weight: bold;
      color: black;
      cursor: pointer;

      &:hover {
        color: #505050;
      }
    }
  }

  /* .input-menu {
    display: flex;
    width: 500px;
    height: 40px;
    justify-content: center;
    margin: 0 8px 16px 8px;
    border-radius: 4px;
    border: 1px solid #1e3a5f;
  } */

  /* .submenu {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    top: 100%;
  } */

  /* .submenu-item {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      color: #ff8c00;
      background-color: #1e3a5f;
    }
  } */
`;
