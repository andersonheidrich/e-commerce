import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  margin: 20px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  /* background-color: ${({ bgcolor }) => bgcolor || "#3498db"}; */
  color: ${({ fontcolor }) => fontcolor || "#df0505"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({ hovercolor }) => hovercolor || "#2980b9"};
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 4px;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ bgcolor }) => bgcolor || "#fff"};
  color: ${({ textcolor }) => textcolor || "#333"};

  &:hover {
    background-color: ${({ hoverbgcolor }) => hoverbgcolor || "#f1f1f1"};
    color: ${({ hovertextcolor }) => hovertextcolor || "#000"};
  }
`;

// export const Container = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;

//   .store-menu-item {
//     color: #1e3a5f;
//     padding: 0 36px 0 36px;
//     cursor: pointer;

//     &:hover {
//       color: #5e7a9f;
//     }
//   }

//   .input-menu {
//     display: flex;
//     width: 500px;
//     height: 40px;
//     justify-content: center;
//     margin: 0 8px 16px 8px;
//     border-radius: 4px;
//     border: 1px solid #1e3a5f;
//   }

//   .submenu {
//     display: flex;
//     flex-direction: column;
//     background-color: white;
//     padding: 4px;
//     border-radius: 4px;
//     position: absolute;
//   }

//   .submenu-item {
//     display: flex;
//     padding: 8px;
//     justify-content: center;
//     align-items: center;
//     border-radius: 4px;
//     font-size: 16px;
//     position: relative;

//     &:hover {
//       color: #ff8c00;
//       background-color: #1e3a5f;
//     }
//   }
// `;
