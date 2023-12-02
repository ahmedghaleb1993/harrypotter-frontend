import Image from "next/image";
import { MotionDiv } from "./MotionDiv";


export interface WizardCardProps {
    id: number;
    name: string;
    image: string;
    species: string;
    house: string;
    job: string;
}


interface Prop {
    wizard: WizardCardProps;
    index: number;
}

const variants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
}

const WizardCard = ({ wizard, index }: Prop) => {
    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: index * 0.25,
                ease: 'easeInOut',
                duration: 0.5
            }}
            viewport={{ amount: 0 }}

            className="max-w-sm rounded relative w-full"
        >
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
                        {wizard.house}
                    </h2>
                    <div className="py-1 px-2 rounded-sm bg-[#161921]">
                        <p className="text-white text-sm font-bold capitalize">
                            {wizard.job}
                        </p>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
}

export default WizardCard;