import "./authentication.style.scss";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser ? (
        navigate("/")
      ) : (
        <div className="auth-container">
          <SignInForm />
          <SignUpForm />
        </div>
      )}
    </>
  );
};

export default Authentication;
