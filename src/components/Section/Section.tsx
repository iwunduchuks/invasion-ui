import React from "react";
import '../../style/global.css';
import './Section.css'
import classNames from "classnames";
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Section(props:{
    children: React.ReactNode,
    gap: '48px' | '24px' | '12px' | string,
    className?: string,
    style?: object,
    id?: string
}) {
    
    const theme = useThemeContext();
    const defaultClassName = classNames(
        'section', 
        theme? theme: 'base'
    );
    return (
        <div 
        className= {props.className? props.className: defaultClassName} 
        id={props.id} 
        style= {{gap: props.gap, ...props.style}}
        {...props}
        >
            {props.children}
        </div>
    )
}

