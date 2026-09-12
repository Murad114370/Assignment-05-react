import React, { use } from 'react';
import type { Itechnology } from '../../types/technology';
import AvailableTechnologies from './AvailableTechnologies';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    // console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies);
    return (
        <div className='container mx-auto'>

            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>Available technologies</h2>

                <div>
                    <button className='btn btn-success'>Available</button>
                    <button className='btn '>Selected</button>
                </div>
            </div>


            <AvailableTechnologies technologies={technologies}></AvailableTechnologies>

        </div>
    );
};

export default Technologies;