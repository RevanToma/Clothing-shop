import Navigation from "../../routes/navigation/navigation.component";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import * as S from "../../routes/navigation/navigation.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { clearCart } from "../../store/user/user.reducer";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useState } from "react";
import "./side-menu.styles.css";
const SideMenu = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const handleSignOutUser = () => {
    dispatch(clearCart());
    signOutUser();
  };
  const setOpenHandleSlider = () => {
    navigate("/sidemenu");
  };
  return (
    <div
      className={isOpen ? "menu-button" : "menu-button-open"}
      onClick={openHandler}
    >
      <div className="menu-button-burger"></div>
    </div>
  );
};

export default SideMenu;
