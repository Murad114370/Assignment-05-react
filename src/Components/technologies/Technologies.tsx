import React, { use } from 'react';
import type { Itechnology } from '../../types/technology';

interface TechnologiesProps{
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps ) => {
    // console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies);
    return (
        <div>
            
        </div>
    );
};

export default Technologies;