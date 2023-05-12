import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content  hidden lg:block">
        <div>
          <p>
            Copyright © 2023 - All right reserved by
            <Link
              to="https://github.com/Somesh-Dahatonde/Aibot"
              className="underline hover:text-primary-content pl-1 "
            >
              SomeshSD 💟
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
