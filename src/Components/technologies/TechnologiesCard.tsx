
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technologyTypes";

type TechnologyCardProps = {
    technology: Itechnology,
    saved: Itechnology[]
    handleSavedTechnology: (technology: Itechnology) => void

}

const TechnologiesCard = ({ technology, handleSavedTechnology, saved }: TechnologyCardProps) => {
    const {name, category, description, icon, rating, difficulty, badge } = technology;
    // const isSelected = false;
    const isSelected = saved.some((item) => item.id === technology.id);
    // console.log(isSelected);
    // const [isSelected, setSelected] = useState(false);

    return (
        <div className="group flex flex-col card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">

            <div className="card-body p-6">

                {/* Icon + Badge */}
                <div className="flex items-start justify-between">

                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">

                        <img
                            src={icon}
                            alt={name}
                            className="w-11 h-11 object-contain"
                        />

                    </div>

                    <div className="badge badge-primary badge-outline font-medium">
                        {badge}
                    </div>

                </div>

                {/* Technology Name */}
                <h2 className="card-title text-xl font-bold mt-5">
                    {name}
                </h2>

                {/* Description */}
                <p className="text-sm text-base-content/60 leading-6 mt-2 line-clamp-3">
                    {description}
                </p>

                {/* Category + Difficulty + Rating */}
                <div className="flex items-center justify-evenly gap-2 mt-5 pt-4 border-t border-base-200">

                    <span className="badge badge-outline font-medium">
                        {category}
                    </span>

                    <span className="badge badge-ghost font-medium">
                        {difficulty}
                    </span>

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500">
                            ★
                        </span>

                        <span className="font-bold">
                            {rating}
                        </span>
                    </div>

                </div>

                {/* Button */}
                <div className="card-actions mt-6">

                    <button
                        disabled={isSelected}
                        onClick={() => {
                            handleSavedTechnology(technology);

                            toast.success(`${technology.name} added to your stack!`);

                            // setSelected(true);
                        }}
                        className={`btn bg-black text-white w-full rounded-xl font-semibold 
                            ${isSelected ? "cursor-not-allowed opacity-60 bg-pink-100 " : "cursor-pointer"}
                            group-hover:shadow-md transition-shadow duration-300
                            `}
                            >
                            {isSelected ? (
                            <>
                                <span className="text-[#fc0983] text-lg font-extrabold">✓</span>
                                <span className="text-[#fc0983] text-[16px] font-extrabold">Selected</span>
                            </>
                        ) : (
                            <>
                                <span>Add to Stack</span>
                                <span className="text-lg">→</span>
                            </>
                        )}
                    </button>

                </div>

            </div>

        </div>

    );
};

export default TechnologiesCard;