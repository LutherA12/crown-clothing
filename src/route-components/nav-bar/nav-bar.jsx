import "./nav-bar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils/firebase.utils";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //console.log(currentUser);

  const SignOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={SignOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/sign-in-page">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;
