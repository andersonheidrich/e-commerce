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
// const CustomDropdownMenu = ({ listOptions }) => {
//   return (
//     <div>
//       <h3>Custom Dropdown Menu</h3>
//       <div>
//         {listOptions.map((option, index) => (
//           <div key={index} value={option.value}>
//             {option.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomDropdownMenu;
// const Dropdown = ({ listMenus, listSubmenus }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <Container>
//       {listMenus.map((option, index) => (
//         <div
//           key={index}
//           className="store-menu-item"
//           onMouseEnter={() => toggleDropdown(!isOpen)}
//           onMouseLeave={() => toggleDropdown(!isOpen)}
//         >
//           {option}
//         </div>
//       ))}
//       {isOpen && (
//         <div className="submenu">
//           {listSubmenus.map((option, index) => (
//             <div key={index} className="submenu-item">
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Dropdown;
