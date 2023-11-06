import React from "react";

function Footer() {
  return (
    <section className="footer--container">
      <div className="footer">
        <p>
          Designed by <span>Wilson Justino</span>
        </p>
      </div>
      <div className="footer--items">
        &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
      </div>
    </section>
  );
}

export default Footer;
