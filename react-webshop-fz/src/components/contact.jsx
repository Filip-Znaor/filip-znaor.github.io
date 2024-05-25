import React from "react";
import Header from "./partials/header.html";
import Footer from "./partials/footer.html";
import "./css/style.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <nav>
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
      </nav>

      <main>
        <h2>-Kontakt-</h2>
        <b>
          Like a Dragon Merchandise Web Shop
          <br />
          <br />
          Telefon: 123-456
          <br />
          E-mail: info@likeadragon.hr
          <br />
          Fax: 123-456-789
          <br />
          <br />
          Facebook: facebook.com/likeadragonhr
          <br />
          Instagram: instagram.com/@likeadragonhr
          <br />
          Twitter: twitter.com/@likeadragonhr
          <br />
          <br />
          Youtube: youtube.com/likeadragonhr
          <br />
          Niconico: niconico.jp/@likeadragonhr
        </b>
        <br />
        <img
          src="images/istockphoto-1356525097-612x612.jpg"
          width="500px"
          height="300px"
          alt="Dragon Merchandise"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
