import React from 'react'
import { IconArrowRight } from '../Icons/IconArrowRight'

export const CardWork = ({ title, content, important, link}) => {
    return (
        <div className = "__work_item">
            <div className = "__work_item_header">
                <h5>{ title }</h5>
            </div>
            <div className = "__work_item_body">
                <p>{ content }</p>
                <br/>
                {
                    !!important && <strong>{ important }</strong>
                }
            </div>
            <div className = "__work_item_footer">
                <a target="_blank"  href={ link } className ="__btn_link"><p>Ver demo</p> <IconArrowRight /></a>
            </div>
        </div>
)
}
