import React from "react";
import Header from "./Header";
import Navbar from "./components/navbar";
import Footer from "./Footer";
import "./style.css";

const Checkout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <h2>-Proces plaćanja-</h2>
        <form action="slanje.php">
          <div>
            <label>Ime i prezime</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="fname">E-mail adresa:</label>
            <input type="email" id="fname" name="fname" />
          </div>
          <div>
            <label>Broj kartice:</label>
            <input type="number" required />
          </div>
          <br />
          <div>
            <label>Adresa dostave:</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="phone">Telefon:</label>
            <input type="tel" id="phone" required />
          </div>
          <div>
            <label>Posebne napomene:</label>
            <input type="text" />
          </div>
        </form>
        <br />
        <br />
        <table align="center" border="2px" width="100%">
          <thead>
            <tr>
              <th>Slika artikla</th>
              <th>Opis artikla</th>
              <th>Količina</th>
              <th>Cijena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="images/products/kus.jpg"
                  width="100px"
                  height="100px"
                  alt="Nishikiyama Jastuk"
                />
              </td>
              <td>Nishikiyama Jastuk</td>
              <td>1 kom</td>
              <td>24,99€</td>
            </tr>
            <tr>
              <td>
                <img
                  src="images/products/maj.jpg"
                  width="75px"
                  height="100px"
                  alt="Goro Majima Model"
                />
              </td>
              <td>Goro Majima Model</td>
              <td>1 kom</td>
              <td>89,99€</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>UKUPNO</b>
              </td>
              <td></td>
              <td>114,98€</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div>
          <a href="cart.html">
            <button type="submit">Natrag na košaricu</button>
          </a>
          <a href="index.html">
            <button type="submit">Završi plaćanje</button>
          </a>
        </div>
        <br />
        <br />
        <div>
          <input type="checkbox" required /> Prihvaćam prikupljanje i obradu
          osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti
          ispunjen, te da me se kontaktira u svrhu slanja obavijesti.
          <br />
          <input type="checkbox" /> Prijavi se na newsletter.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
