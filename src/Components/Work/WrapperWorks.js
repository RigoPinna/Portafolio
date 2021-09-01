import React from 'react'
import { CardWork } from './CardWork'

const WORKS = [
    {
        title:'GiffApp',
        content:'GiffApp es una página SPA, en ella se puede realizar busqueda de gifs y guardar gifs en tus favoritos, está desarrollada con React.js',
        important:'Se consumió una API para obtener los gifs.',
        link:'https://rigopinna.github.io/gifApp/'
    },
    // {
    //     title:'HeroApp',
    //     content:'HeroApp es una página SPA, en ella se utiliza react router dom para el manejo de las diferentes páginas.',
    //     important:'No está desplegada la página en algun servidor, sin embargo el código esta disponible en gitHub.'
    // },
    {
        title:'ComunidavApp',
        content:'Comnidav es una plataforma para donaciones, está desarrollada con HTML5, CSS5, JavaScript y PHP.',
        important:'Actualmente me encuentro desarrollando la pagina existente con React JS, Sass y Redux.',
        link:'https://comunidav.org/'
    },
    {
        title:'RegistroComunidav',
        content:'Se realizó la parte de registro de usuario de la página web comunidav.',
        important:'Se utilizó React, Sass y Redux.',
        link:'https://app.comunidav.org/'
    },
]

export const WrapperWorks = () => {
    return (
        <div className ="__work_wrapper_works">
            {
                WORKS.map( work => <CardWork key={work.title} { ...work } />)
            }
        </div>
    )
}
