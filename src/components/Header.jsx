  import React from "react";

  import Container from "react-bootstrap/Container";

  import Navbar from "react-bootstrap/Navbar";

  import Nav from "react-bootstrap/Nav";

  import image from "../logo-top-170-57.png";

  // import { NavLink } from "react-router-dom";

  // import { useNavigate } from "react-router-dom";

  const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // const navigate = useNavigate();

    const logoutHandler = () => {
      localStorage.clear();

      // navigate("/login");
    };
    // 
    return (
        <div
          style={{ backgroundColor: "#F8F9FA", margin: "0", padding:"0", justifyContent:"space-between" }}
          expand="lg"
          className="navbar-expand-lg shadow-sm p-3 mb-5 w-100 rounded  d-flex align-items-center"
        >
         
            <div className="">
              <img
                src={image}
                className="img"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

              <div className="d-flex align-items-center justify-content-around display-5" style={{width:"350px"}}>
                
                <Nav.Link
                  to="/user/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "font-weight-bold text-decoration-underline nav-link me-5 "
                      : "nav-link me-5"
                  }
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-weight-bold text-decoration-underline nav-link me-3 "
                      : "nav-link me-3 text-secondary"
                  }
                >
                  About
                </Nav.Link>

                {user && user.isAuthenticated ? (
                  <Nav.Link
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-weight-bold text-decoration-underline nav-link me-3 "
                        : "nav-link me-3 text-secondary"
                    }
                    onClick={logoutHandler}
                  >
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-weight-bold text-decoration-underline nav-link me-3 "
                        : "nav-link me-3 text-secondary"
                    }
                  >
                    Login
                  </Nav.Link>
                )}

              </div>
        </div>
    );
  };

  export default Header;
