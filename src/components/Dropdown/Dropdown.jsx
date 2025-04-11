import { useState } from "react";
import {
  Container,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "./Dropdown.styles";

const CustomDropdown = ({
  bgcolor,
  fontcolor,
  hovercolor,
  listoptions,
  textcolor,
  hoverbgcolor,
  hovertextcolor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <DropdownButton
        onMouseEnter={() => toggleDropdown(!isOpen)}
        onMouseLeave={() => toggleDropdown(!isOpen)}
        bgcolor={bgcolor}
        fontcolor={fontcolor}
        hovercolor={hovercolor}
      >
        {selectedItem}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {listoptions.map((option, index) => {
            return (
              <DropdownItem
                key={index}
                bgcolor={bgcolor}
                textcolor={textcolor}
                hoverbgcolor={hoverbgcolor}
                hovertextcolor={hovertextcolor}
                onClick={() => handleItemClick(option)}
              >
                {option}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      )}
    </Container>
  );
};

export default CustomDropdown;
