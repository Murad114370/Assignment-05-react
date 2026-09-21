import type { Itechnology } from "../../types/technologyTypes";

type ReadingListProps = {
  technologies: Itechnology[];
  handleRemoveTechnology: (id: number) => void
  handleClearAll:() => void
};

const StackingList = ({ technologies, handleClearAll, handleRemoveTechnology }: ReadingListProps) => {
  return (
    <div className="col-span-1">
      <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl">
        
        <div className="card-body p-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="text-slate-400">
            {technologies.length} Technology Selected
          </p>

          {technologies.length > 0 ? (
            <div className="space-y-3 mt-4">

              {technologies.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-slate-200 rounded-xl p-3"
                >

                  <div className="flex items-center gap-3">

                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-400">
                        {item.category}
                      </p>
                    </div>

                  </div>

                  <button onClick={ () =>handleRemoveTechnology(item.id) } className="btn btn-ghost btn-sm text-xl">
                    ✕ 
                  </button>

                </div>
              ))}

              <button
                type="button"
                disabled={technologies.length === 0}
                onClick={handleClearAll}
                className="btn btn-outline btn-error w-full mt-5"
              >
                Remove All
              </button>

            </div>
          ) : (
            <div>
              <p className="text-slate-400 mt-2">
                No technologies selected yet.
              </p>

              <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 mt-3 text-center">
                <p className="text-slate-400">
                  Your stack is empty.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default StackingList;            