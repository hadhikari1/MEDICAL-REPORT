import React from 'react';
import '../css/ButtonComponent.css';
export default function ButtonComponent(props:{title: string, className: string, onClick: any, type?: any}){
    return(
        <button className={props.className} onClick={props.onClick} type={props.type}>
            {props.title}
        </button>
    );
}