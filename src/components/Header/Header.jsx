import * as Style from "./Header.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../images/logo.png";
import PSLogo from "../../images/Consoles/playstation.png";
import NintendoLogo from "../../images/Consoles/nintendo.png";
import XboxLogo from "../../images/Consoles/xbox.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Home>
          <img src={Logo} onClick={() => navigate("/")} />
        </Style.Home>
        <Style.Menu>
          <div className="store-nav">
            <div className="store-menu-item">
              <img src={PSLogo} onClick={() => navigate("/playstation")} />
              <span onClick={() => navigate("/playstation")}>PlayStation</span>
            </div>
            <div className="store-menu-item">
              <img src={NintendoLogo} onClick={() => navigate("/nintendo")} />
              <span onClick={() => navigate("/nintendo")}>Nintendo</span>
            </div>
            <div className="store-menu-item">
              <img src={XboxLogo} onClick={() => navigate("/xbox")} />
              <span onClick={() => navigate("/xbox")}>Xbox</span>
            </div>
          </div>
          <div className="user-nav">
            {login === false ? (
              <div className="user-menu-item">
                <LoginIcon sx={{ fontSize: 28 }} />
              </div>
            ) : (
              <>
                <div className="user-menu-item">
                  <FavoriteIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="user-menu-item">
                  <PersonIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="user-menu-item">
                  <ShoppingCartIcon
                    sx={{ fontSize: 28 }}
                    onClick={() => navigate("/cart")}
                  />
                </div>
              </>
            )}
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
