import { Outlet } from "react-router-dom";
import { Fragment } from "react";
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

const Navigation = () => {
  const dispatch = useDispatch();

  const handleSignOutUser = () => {
    dispatch(clearCart());
    signOutUser();
  };

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shoppingHistory">SHOPPING HISTORY</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as="span" onClick={handleSignOutUser}>
                SIGN OUT
              </NavLink>
              <EmailContainer>{currentUser.email}</EmailContainer>
            </>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
