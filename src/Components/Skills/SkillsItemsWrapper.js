import React from 'react';
import { IconCSS3 } from '../Icons/IconCSS3'
import { IconHTML5 } from '../Icons/IconHTML5';
import { IconJQuery } from '../Icons/IconJQuery';
import { IconJS } from '../Icons/IconJS';
import { IconLaravel } from '../Icons/IconLaravel';
import { IconPHP } from '../Icons/IconPHP';
import { IconReact } from '../Icons/IconReact';
import { IconRedux } from '../Icons/IconRedux';
import { IconSass } from '../Icons/IconSass';
import {ItemSkill } from './ItemSkill'

const ITEMS_SKILLS = [
    {Icon: IconCSS3, title:'CSS3', colorDominant:'#F24E1E', colorBg: 'rgba(242, 78, 30, 0.1)'},
    {Icon: IconHTML5, title:'HTML', colorDominant:'#699BF7', colorBg: 'rgba(105, 155, 247, 0.1)'},
    {Icon: IconJS, title:'JavaScript', colorDominant:'#F5DE19', colorBg: 'rgba(245, 222, 25, 0.1)'},
    {Icon: IconJQuery, title:'jQuery', colorDominant:'#21609B', colorBg: 'rgba(70, 125, 174, 0.1)'},
    {Icon: IconPHP, title:'PHP', colorDominant:'#85B6FF', colorBg: 'rgba(133, 182, 255, 0.1)'},
    {Icon: IconReact, title:'React JS', colorDominant:'#00D8FF', colorBg: 'rgba(0, 216, 255, 0.1)'},
    {Icon:IconSass, title:'Sass', colorDominant:'#CD6799', colorBg: 'rgba(205, 103, 153, 0.1)'},
    {Icon: IconRedux, title:'Redux', colorDominant:'#764ABC', colorBg: 'rgba(118, 74, 188, 0.1)'},
    {Icon:  IconLaravel , title:'Laravel', colorDominant:'#FF2D20', colorBg: 'rgba(255, 45, 32, 0.1)'},
]
export const SkillsItemsWrapper = () => {
    return (
        <div className="__skills_wrapper_items">
            {
                ITEMS_SKILLS.map( item => <ItemSkill key={ item.title }  {...item}/>)
            }
            
        </div>
    );
}