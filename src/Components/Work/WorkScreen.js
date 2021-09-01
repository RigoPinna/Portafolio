import React from 'react'
import { WrapperWorks } from './WrapperWorks'
import handOK from '../../assets/HandOk.png'
export const WorkScreen = () => {
    return (
        <section className="__work">
            <div>
                <h2>Mis trabajos</h2>
            </div>
            <WrapperWorks />
            <img src ={handOK} alt="Illustration hanlde"/>
        </section>
    )
}
