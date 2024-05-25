import React from 'react';
import Header from './partials/header.html';
import Footer from './partials/footer.html';
import './css/style.css';

const products = () => {
    return (
        <div>
            <Header />
            <nav>
                <table width="100%" border="2px">
                    <tbody>
                        <tr>
                            <td><a href="index.html"><b>NASLOVNICA</b></a></td>
                            <td><a href="about.html"><b>O NAMA</b></a></td>
                            <td><a href="blog.html"><b>BLOG</b></a></td>
                            <td><a href="cart.html"><b>KOŠARICA</b></a></td>
                            <td><a href="contact.html"><b>KONTAKT</b></a></td>
                            <td><a href="products.html"><b>PROIZVODI</b></a></td>
                        </tr>
                    </tbody>
                </table>
            </nav>

            <iframe src="partials/asideProducts.html" height="410px" width="300px" className="auto-height-iframe asideProducts"></iframe>

            <div>
                <h1>Popis proizvoda</h1>

                <h2>-Jakne-</h2>
                <table align="center" border="2px">
                    <tbody>
                        <tr>
                            <td>
                                <a href="product-detail.html">
                                    <img src="images/products/maj.jpg" width="200px" height="300px" alt="Goro Majima Model" />
                                </a>
                            </td>
                            <td>
                                <a href="product-detail.html">
                                    <b><i>-Goro Majima Model-</i></b>
                                    <p>
                                        Legendarni Hannya dizajn. Boje je odabrao sam gospodin Majima, uz komentar "možda bolje ovo ne prati u veš mašini". <br />
                                        Što je to značilo, ostavit ćemo Vama da saznate, no vlakno u pitanju je izuzetno kvalitetno.
                                        <br /><br />
                                        <b>Prosječna ocjena kupaca= 4,9/5,0⭐</b>
                                        <br /><br />
                                        <b><u>Cijena= 89,99€</u></b>
                                    </p>
                                </a>
                            </td>
                        </tr>
                        {/* Other product rows... */}
                    </tbody>
                </table>

                {/* Similar tables for other product categories */}
            </div>

            <Footer />
        </div>
    );
}

export default products;
