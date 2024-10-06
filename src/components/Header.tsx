import { HeaderContainer } from "./Style";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-menu-close.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <HeaderContainer>
      {showMenu === true ? (
        <div className="menu">
          <p>Home</p>
          <p>New</p>
          <p>Popular</p>
          <p>Trendings</p>
          <p>Categoriers</p>
        </div>
      ) : (
        ""
      )}
      <img className="logo_img" src={Logo} alt="logo" />
      <div className="navigation">
        <p>Home</p>
        <p>New</p>
        <p>Popular</p>
        <p>Trendings</p>
        <p>Categories</p>
        {showMenu === false ? (
          <img className="menu_img" onClick={() => setShowMenu(true)} src={MenuIcon} alt="" />
        ) : (
          <img
            onClick={() => setShowMenu(false)}
            className="close_img"
            src={CloseIcon}
          />
        )}
      </div>
    </HeaderContainer>
  );
}
