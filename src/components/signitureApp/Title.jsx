
import React from 'react';

export default function Title({classes, text}) {
    return (
        <h1 className={!classes ? "text-center": classes}> 
            {!text ? 'E-Signiture App' : text}
        </h1>
    )
}