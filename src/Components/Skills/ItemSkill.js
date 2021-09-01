import React from 'react';
import PropTypes from 'prop-types';
export const ItemSkill = ({ Icon,title, ColorDominant, colorBg }) => {
    return (
        <div className = "__skills_item" style = {{backgroundColor:colorBg}}>
                <Icon />
                <h3 style = {{ color: ColorDominant }}>{ title }</h3>
        </div>

    )
}
ItemSkill.prototype = {
    Icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    ColorDominant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}