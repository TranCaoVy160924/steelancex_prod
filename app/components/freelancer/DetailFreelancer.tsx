'use client'

interface DetailFreelancerProps {
    title?: string;
    description?: string;
}

const DetailFreelancer: React.FC<DetailFreelancerProps> = ({
    title,
    description
}) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <h3 className="text-gray-400">
                    {title}
                </h3>
            </div>
            <div className="col-span-10">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default DetailFreelancer