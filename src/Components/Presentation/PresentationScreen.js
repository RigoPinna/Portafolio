import React from 'react';
import { IlustrationScrollView } from './IlustrationScrollView';
import { MyPhoto } from './MyPhoto';

export const PresentationScreen = ()=> {
    return (
        <>
            <section id="Presentation" className="__presentation">
                <div>
                    <h1>Hola,<br/>soy Rigoberto Cepeda</h1>
                    <h2>Desarrollador web front end.</h2>
                </div>
                <MyPhoto />

            </section>
            <IlustrationScrollView />
        </>
    )
}