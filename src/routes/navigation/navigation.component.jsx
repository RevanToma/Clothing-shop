import { Outlet, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearCart } from "../../store/user/user.reducer";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  EmailContainer,
} from "./navigation.styles.jsx";
import SideMenu from "../../components/side-menu/side-menu.component";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();
  const handleSignOutUser = () => {
    dispatch(clearCart());
    signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as="span" onClick={handleSignOutUser}>
                SIGN OUT
              </NavLink>
              <EmailContainer to="/shoppingHistory">
                {currentUser.email}
              </EmailContainer>
            </>
          ) : (
            <>
              <NavLink to="/auth">SIGN IN</NavLink>
              <NavLink to="/shoppingHistory">SHOPPING HISTORY</NavLink>
            </>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown position="top" />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};
export default Navigation;
