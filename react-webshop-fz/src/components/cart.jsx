import React from 'react';
import Header from './Header';
import Navbar from "./components/navbar";
import Footer from './Footer';
import './style.css';

const Cart = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <img src="images/cart.png" width="150px" height="150px" alt="Cart" />
                <h2>-Košarica-</h2>
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
                            <td><img src="images/products/kus.jpg" width="100px" height="100px" alt="Nishikiyama Jastuk" /></td>
                            <td>Nishikiyama Jastuk</td>
                            <td>1 kom</td>
                            <td>24,99€</td>
                        </tr>
                        <tr>
                            <td><img src="images/products/maj.jpg" width="75px" height="100px" alt="Goro Majima Model" /></td>
                            <td>Goro Majima Model</td>
                            <td>1 kom</td>
                            <td>89,99€</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>UKUPNO</b></td>
                            <td></td>
                            <td>114,98€</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="buttons">
                    <a href="products.html">
                        <button type="button">Natrag na trgovinu</button>
                    </a>
                    <a href="checkout.html">
                        <button type="button">Nastavi na plaćanje</button>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Cart;
