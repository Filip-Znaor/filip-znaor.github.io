import React from 'react';
import Header from './partials/header';
import Navbar from "./components/navbar";
import AsideBlog from './AsideBlog';
import Footer from './Footer';
import './style.css';

const BlogDetails = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <img src="images/dance.gif" alt="Dance gif" />
                <table width="100%" border="2px">
                    <tbody>
                        <tr>
                            <td>
                                <b>WELCOME TO 2024!</b>
                                <p>
                                    Nova godina je napokon krenula i kao što možete naslutiti, bili smo veoma zaposleni :)
                                    <br />
                                    Infinite Wealth dolazi za svega nekoliko tjedana, što naravno znači novi set jakni, parfema i svih drugih proizvoda koji će Vam pomoći
                                    <br />
                                    u navigiranju divljene imena... Hawaii!
                                    <br /><br />
                                    Više novosti će ubrzo doći :D
                                    <br /><br />
                                    Nadalje, zanima nas Vaše mišljenje o aktivnostima koje možete isprobati u Hono Lulu-u. Koji Vam je favorit: plivanje, crazy delivery ili nešto treće?
                                    <br /><br />
                                    <img src="./dolphin.jpg" width="600px" height="400px" alt="Dolphin" />
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <AsideBlog />
            <Footer />
        </div>
    );
}

export default BlogDetails;
