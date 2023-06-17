'use client'

interface SectionFreelancerProps {
    title?: string;
    body: React.ReactElement
}

const SectionFreelancer: React.FC<SectionFreelancerProps> = ({
    title,
    body
}) => {
    return (
        <div className="
                bg-white 
                rounded-15 
                shadow-lg
            "
        >
            <div className="
                    flex 
                    flex-col 
                    p-8 
                    px-10 
                    gap-2
                "
            >
                <h1 className="text-2xl font-medium">
                    {title}
                </h1>
                <div className="border-b-2"></div>
                {body}
            </div>
        </div>
    )
}

export default SectionFreelancer