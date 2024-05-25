import React from "react";

const Navbar = () => {
  return (
    <table width="100%" border="2px">
      <tbody>
        <tr>
          <td>
            <a href="index.html">
              <b>NASLOVNICA</b>
            </a>
          </td>
          <td>
            <a href="about.html">
              <b>O NAMA</b>
            </a>
          </td>
          <td>
            <a href="blog.html">
              <b>BLOG</b>
            </a>
          </td>
          <td>
            <a href="cart.html">
              <b>KOŠARICA</b>
            </a>
          </td>
          <td>
            <a href="contact.html">
              <b>KONTAKT</b>
            </a>
          </td>
          <td>
            <a href="products.html">
              <b>PROIZVODI</b>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Navbar;
