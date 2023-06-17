'use client'

import { LuFolderClock } from "react-icons/lu";
import { RiFolderShield2Line } from "react-icons/ri";

interface JobInformationProps {
    title: string;
    paymentType: string;
    budget: string;
    projectName: string;
    projectDescription: string;
    projectSkills: string[];
}

const JobInformation: React.FC<JobInformationProps> = ({
    title,
    paymentType,
    budget,
    projectName,
    projectDescription,
    projectSkills,
}) => {
    return (
        <>
            <label>{title}</label>
            <div className="
                    grid 
                    grid-cols-4 
                    border-[1px] 
                    border-pink-cus-tx 
                    rounded-[5px] 
                    p-8 
                    gap-8
                "
            >
                <div className="
                        col-span-1 
                        border-r-[1px] 
                        border-pink-cus-tx
                    "
                >
                    <div className="flex flex-col items-center">
                        <div>
                            {paymentType === 'hour' ? <LuFolderClock size={75} /> : <RiFolderShield2Line size={75} />}
                        </div>
                        <h2 className="text-xl">
                            {paymentType === 'hour' ? 'Pay by the hour' : 'Pay a fixed price'}
                        </h2>
                        <h2 className="text-[15px]">
                            {budget}
                        </h2>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl">
                            {projectName}
                        </h2>
                        <p className="text-xl line-clamp-3">
                            {projectDescription}
                        </p>
                        <div className="text-xl">
                            {projectSkills.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobInformation