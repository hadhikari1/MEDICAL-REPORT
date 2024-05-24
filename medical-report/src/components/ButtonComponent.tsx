import React from 'react';
import '../css/ButtonComponent.css';
export default function ButtonComponent(props:{title?: string, className: string}){
    return(
        <button className={props.className}>
            {props.title}
        </button>
    );
}