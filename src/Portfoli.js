import React from 'react'
import { NavBar } from './Components/NavBar/NavBar';
import { PresentationScreen } from './Components/Presentation/PresentationScreen';
import {AboutScreen } from './Components/AboutUs/AboutScreen';
import { SkillsScreen } from './Components/Skills/SkillsScreen';
import './Sass/index.scss';
import { WorkScreen } from './Components/Work/WorkScreen';
import { FooterPag } from './Components/Footer/FooterPag';
export const Portfoli = () => {
    return (
        <>
            <header>
                <NavBar />
                <PresentationScreen />
            </header>
                <AboutScreen />
                <SkillsScreen />
                <WorkScreen />
                <FooterPag />
        </>

    )
}
