import React from 'react';
import { SkillsItemsWrapper } from './SkillsItemsWrapper';

export const SkillsScreen = () => {
    return (
        <section id="Skills" className = "__skills">
          <div>
            <h2>1 año de experiencia</h2>
            <br/>
            <p><strong>Al día de hoy</strong> realizo actualizaciones continuamente en la página web comunidav, con el fin de corregir errores y mejorarla.</p>
            <br/>
            <br/>
            <br/>
            <h2>Tecnologías que utilizo</h2>
          </div>
            <SkillsItemsWrapper />
        </section>
    );

}