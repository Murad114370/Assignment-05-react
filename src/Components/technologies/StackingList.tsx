import React from 'react';
import type { Itechnology } from '../../types/technologyTypes';
// import type {Itechnology} from '...'

type ReadingListProps = {
    technologies: Itechnology[]
}

const StackingList = ({technologies}: ReadingListProps) => {
  return (
    <div className="col-span-1">
      <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl">
        
        <div className="card-body p-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="text-slate-400">
            No technologies selected yet.
          </p>

          <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 mt-3 text-center">
            <p className="text-slate-400">
              Your stack is empty.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StackingList;