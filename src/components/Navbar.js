import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <nav className="navbar bg-body-dark">
          <div className="d-flex align-items-center">
            <a href="/" className="text-decoration-none">
              <span
                className="px-3 py-2 rounded text-white fw-bold"
                style={{
                  background: "linear-gradient(90deg, black, #20c997)",
                  borderRadius: "20px",
                  fontSize: "1.2rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                EKTA
              </span>
              <span
                className="text-white ms-2 fw-semibold"
                style={{ fontSize: "1.2rem" }}
              >
                JANGIR
              </span>
            </a>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
