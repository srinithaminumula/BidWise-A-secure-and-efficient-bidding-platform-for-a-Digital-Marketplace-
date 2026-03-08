import React from 'react';

const H1  =({content,color})=>{
    return(
        <h1 className={'text-[${color}] text-2x1 font-bold mb-2 min-[480px]:tetext-4x1 md:text-6x1 x1:text-7x1 2x1:text-8x1'}>{content}</h1>
    );
};
export  default H1;