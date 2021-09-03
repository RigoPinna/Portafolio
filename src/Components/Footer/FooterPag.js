import React from 'react';
import { IconGitHub } from '../Icons/IconGitHub';
import { IconIn } from '../Icons/IconIn';

export const FooterPag = () => {
    return (
        <footer id="Contact">
            <h2>Contactame</h2>
            <br/>
            <p>Para cualquier consulta, o simplemente para saludar, póngase en contacto conmigo.</p>
            <div className ="__footer_items">
                <div className="__footer_item_contact">
                    <h5>Teléfono</h5>
                    <p>+52 (834)-254-2740</p>
                </div>
                <div className="__footer_item_contact">
                    <h5>Correo electrónico</h5>
                    <a href="mailto:cepeda.rigoberto22@gmail.com">cepeda.rigoberto22@gmail.com</a>
                </div>
                <div className="__footer_item_contact">
                    <h5>Sigueme en</h5>
                    <a target="_blank" href="https://www.linkedin.com/in/rigoberto-cepeda/"><IconIn /></a>
                    <a target="_blank" href="https://github.com/RigoPinna"><IconGitHub /></a>
                </div>

            </div>
        </footer>
    )
}