import Image from "next/image";


export interface WizardCardProps {
    name: string;
    image: string;
    species: string;
    House: string;
    Job: string;
}


interface Prop {
    wizard: WizardCardProps;
}


const WizardCard = ({ wizard }: Prop) => {
    return (
        <div className="max-w-sm rounded relative w-full">
            <div className="relative w-full h-[37vh]">
                <Image src={wizard.image}
                    alt={wizard.name}
                    fill
                    className="rounded-xl"
                />
            </div>

            <div className="py-4 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
                        {wizard.name}
                    </h2>
                    <div className="py-1 px-2 rounded-sm bg-[#161921]">
                        <p className="text-white text-sm font-bold capitalize">
                            {wizard.species}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-bold text-slate-400 text-lg line-clamp-1 w-full">
                        {wizard.House}
                    </h2>
                    <div className="py-1 px-2 rounded-sm bg-[#161921]">
                        <p className="text-white text-sm font-bold capitalize">
                            {wizard.Job}
                        </p>
                    </div>
                </div>





            </div>



        </div>
    );
}

export default WizardCard;