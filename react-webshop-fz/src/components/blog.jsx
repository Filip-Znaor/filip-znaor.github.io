import React from 'react';
import Header from './Header';
import Navbar from "./components/navbar";
import Footer from './Footer';
import './style.css';

const Blog = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <h2>-Blog-</h2>
                <table align="center" border="2px">
                    <tbody>
                        <tr>
                            <td>
                                <a href="blog-detail.html">
                                    <img src="images/dance.gif" width="300px" height="300px" alt="Dance gif" />
                                </a>
                            </td>
                            <td>
                                <a href="blog-detail.html">
                                    <b>WELCOME TO 2024!</b>
                                    <p>
                                        Nova godina je napokon krenula i kao što možete naslutiti, bili smo veoma zaposleni :)
                                        <br />
                                        Infinite Wealth dolazi za svega nekoliko tjedana, što naravno znači novi set jakni, parfema i svih drugih proizvoda koji će Vam pomoći
                                        <br />
                                        u navigiranju divljene imena... Hawaii!
                                        <br /><br />
                                        Više novosti će ubrzo doći :D
                                    </p>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/hakuho.webp" alt="Hakuho" />
                            </td>
                            <td>
                                <b>BONUS MJESECA</b>
                                <p>
                                    Uz svaku narudžbu ovog mjeseca, kupci će dobiti bedž sa simbolom Hakuho obitelji iz igre Yakuza 3.
                                    <br />
                                    Nadalje, u online segmentu ove franšize, baneri će uključivati 5% veću šansu davanja Mine tipa karata.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/ono-michio-yakuza.gif" width="300px" height="300px" alt="Ono Michio" />
                            </td>
                            <td>
                                <b>IZNENAĐENJE!</b>
                                <p>
                                    Jedan jedini Ono Michio došao je ovdje da bi Vam poželio ugodne praznike pune veselja i plesa :)
                                    <br />
                                    Sljedećih mjeseca dana uživajte u 10% popusta na sve narudžbe uz korištenje koda MICHIXO!
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/ryu.jpg" width="300px" height="300px" alt="Ryu" />
                            </td>
                            <td>
                                <b>THE DRAGON WANDERS...</b>
                                <p>
                                    Zlatni zmaj dolazi sve bliže i bliže. Zahvaljujući Vašim zahtjevima, Goda Ryuji jakna uskoro stiže u ponudu!
                                    <br />
                                    U međuvremenu, komentirajte Vašu najdražu izreku uvaženog gospodina ;)
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Blog;
