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
