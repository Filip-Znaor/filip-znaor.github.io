import React from 'react';
import Header from './partials/header.html';
import Footer from './partials/footer.html';
import './css/style.css';

const productCategories = () => {
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

            <h2>Kategorije proizvoda</h2>

            <a href="products.html">
                <table border="2px" align="center">
                    <tbody>
                        <tr>
                            <td>
                                <img src="images/ryu.jpg" width="300px" height="300px" alt="Jakne" />
                                <br />
                                <b>Jakne</b>
                            </td>
                            <td>
                                <img src="images/products/kus.jpg" width="300px" height="300px" alt="Jastuci" />
                                <br />
                                <b>Jastuci</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/products/par.jpg" width="300px" height="300px" alt="Parfemi" />
                                <br />
                                <b>Parfemi</b>
                            </td>
                            <td>
                                <img src="images/products/maj3.jpg" width="300px" height="300px" alt="Čarape" />
                                <br />
                                <b>Čarape</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </a>

            <Footer />
        </div>
    );
}

export default productCategories;
