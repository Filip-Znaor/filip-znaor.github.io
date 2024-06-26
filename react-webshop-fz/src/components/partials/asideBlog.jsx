import React from 'react';
import '../../css/asideBlog.css';

const asideBlog = () => {
    return (
        <div>
            <h2>Blog snippets for you</h2>
            <table border="2px" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <b>IZNENAĐENJE!</b>
                            <p>
                                Jedan jedini Ono Michio došao je ovdje da bi Vam poželio ugodne praznike pune veselja i plesa :)
                                <br />
                                Sljedećih mjeseca dana uživajte u 10% popusta na sve narudžbe uz korištenje koda MICHIXO!
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table border="2px" width="100%">
                <tbody>
                    <tr>
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
        </div>
    );
};

export default asideBlog;
