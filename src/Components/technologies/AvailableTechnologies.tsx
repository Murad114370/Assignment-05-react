import React from 'react';
import type { Itechnology } from '../../types/technology';

const AvailableTechnologies = ({ technologies }) => {
    console.log(technologies, 'technologies from avilable technologies');
    return (
        <div className='grid grid-cols-3 gap-4 mt-6'>
            {
                technologies.map((technology: Itechnology) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-md">

                            <div className="card-body">

                                {/* 1. Icon + Badge */}
                                <div className="flex justify-between items-center">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-16 h-16 object-contain"
                                    />

                                    <div className="badge badge-primary">
                                        {technology.badge}
                                    </div>
                                </div>

                                {/* 2. Name */}
                                <h2 className="card-title mt-4">
                                    {technology.name}
                                </h2>

                                {/* 3. Description */}
                                <p className="text-sm text-gray-600">
                                    {technology.description}
                                </p>

                                {/* 4. Category + Difficulty + Rating */}
                                <div className="flex justify-between items-center mt-4">

                                    {/* Category */}
                                    <div>
                                        
                                        <div className="badge badge-outline">
                                            {technology.category}
                                        </div>
                                    </div>

                                    {/* Difficulty */}
                                    <div>
                                        
                                        <div className="badge badge-ghost">
                                            {technology.difficulty}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div>
                                        
                                        <span className="font-semibold">
                                            ⭐ {technology.rating}
                                        </span>
                                    </div>

                                </div>

                                {/* 5. Button */}
                                <div className="card-actions mt-5">
                                    <button className="btn btn-primary w-full">
                                        Add to Stack
                                    </button>
                                </div>

                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default AvailableTechnologies;