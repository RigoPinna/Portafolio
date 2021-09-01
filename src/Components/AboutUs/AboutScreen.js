import React from 'react';
import hand from '../../assets/HandSelect.png'
export const AboutScreen = () => {
    return (
        <section id="About" className="__about_us">
            <div>
               <div>
                    <h2>
                        ¡Hola, soy Rigo! Recién graduado en Ingeniería en Sistemas Computacionales.
                    </h2>
                    <br/>
                    <br/>
                    <p>Durante la etapa universitaria realicé mis prácticas profesionales en la empresa Comunidav, donde he desarrollado mis habilidades de liderazgo, trabajo en equipo y realizar múltiples tareas con limitaciones de tiempo.</p>
               </div>
            </div>
            <img src = { hand } alt={'Illustration hand'}/>

        </section>
    )
}