import React from 'react';
import Header from './partials/header.html';
import Footer from './partials/footer.html';
import './css/style.css';

const index = () => {
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

            <a href="products.html"><img src="images/F9carXzboAAC9OY.jpg" width="100%" alt="Web Shop" /></a>

            <h1><u>WEB SHOP</u></h1>

            <h2>-Najpopularniji proizvodi ove sezone-</h2>
            <p>
                <a href="products.html">
                    <img src="images/products/maj.jpg" width="400px" height="600px" alt="Product 1" />
                    <img src="images/products/kir.jpg" width="400px" height="600px" alt="Product 2" />
                    <img src="images/products/tai.jpg" width="400px" height="600px" alt="Product 3" />
                </a>
            </p>

            <div>
                <h2>-Popularne kategorije proizvoda-</h2>
                <a href="productCategories.html">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td><b>Jakne</b></td>
                                <td>//</td>
                                <td><b>Jastuci</b></td>
                                <td>//</td>
                                <td><b>Parfemi</b></td>
                                <td>//</td>
                                <td><b>Čarape</b></td>
                            </tr>
                        </tbody>
                    </table>
                </a>
            </div>

            <h2>-Blog-</h2>
            <a href="blog.html">
                <table align="center" border="2px">
                    <tbody>
                        <tr>
                            <td><img src="images/hakuho.webp" alt="Blog Post 1" /></td>
                            <td>
                                <b>BONUS MJESECA</b>
                                <p>Uz svaku narudžbu ovog mjeseca, kupci će dobiti bedž sa simbolom Hakuho obitelji iz igre Yakuza 3.
                                    <br />
                                    Nadalje, u online segmentu ove franšize, baneri će uključivati 5% veću šansu davanja Mine tipa karata.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="images/ono-michio-yakuza.gif" width="300px" height="300px" alt="Blog Post 2" /></td>
                            <td>
                                <b>IZNENAĐENJE!</b>
                                <p>Jedan jedini Ono Michio došao je ovdje da bi Vam poželio ugodne praznike pune veselja i plesa :)
                                    <br />
                                    Sljedećih mjeseca dana uživajte u 10% popusta na sve narudžbe uz korištenje koda MICHIXO!
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="images/ryu.jpg" width="300px" height="300px" alt="Blog Post 3" /></td>
                            <td>
                                <b>THE DRAGON WANDERS...</b>
                                <p>Zlatni zmaj dolazi sve bliže i bliže. Zahvaljujući Vašim zahtjevima, Goda Ryuji jakna uskoro stiže u ponudu!
                                    <br />
                                    U međuvremenu, komentirajte Vašu najdražu izreku uvaženog gospodina ;)
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </a>

            <h2>-Newsletter-</h2>
            <p>Ako želite aktivno dobivati informacije o našim ponudama i projektima, slobodno ostavite e-mail ovdje.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <form>
                                <label>E-mail adresa:</label>
                                <input type="email" /><br />
                                <input type="submit" /><br />
                                <input type="checkbox" required /> Prihvaćam prikupljanje i obradu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen, te da me se kontaktira u svrhu slanja obavijesti.
                                <br />
                                <input type="checkbox" /> Prijavi se na newsletter.
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Footer />
        </div>
    );
}

export default index;
