import React from 'react';
import '../../css/asideProducts.css';

const AsideProducts = () => {
    return (
        <div>
            <form>
                <h3>Kategorije za prikazati</h3>
                <input type="checkbox" name="jakne" id="jakne" />
                <label htmlFor="jakne">Jakne</label><br />
                
                <input type="checkbox" name="Jastuci" id="Jastuci" />
                <label htmlFor="Jastuci">Jastuci</label><br />
                
                <input type="checkbox" name="parfemi" id="parfemi" />
                <label htmlFor="parfemi">Parfemi</label><br />
                
                <input type="checkbox" name="čarape" id="čarape" />
                <label htmlFor="čarape">Čarape</label><br />
                
                <h3>Cijenovni raspon</h3>
                <input type="radio" id="crna" name="cijena" />
                <label htmlFor="crna">7,99€-24,99€</label><br />
                
                <input type="radio" id="plava" name="cijena" />
                <label htmlFor="plava">24,99€-34,99€</label><br />
                
                <input type="radio" id="crvena" name="cijena" />
                <label htmlFor="crvena">34,99€-89,99€</label><br />
                
                <br />
                <button type="submit">Potvrdi odabir</button>
            </form>
        </div>
    );
};

export default AsideProducts;
