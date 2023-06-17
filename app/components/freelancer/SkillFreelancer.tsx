'use client'

interface SkillFreelancerProps {
    title?: string
}

const SkillFreelancer: React.FC<SkillFreelancerProps> = ({
    title
}) => {
    return (
        <div className="
                px-4 
                py-1 
                border-2 
                border-pink-cus-bt 
                rounded-full
            "
        >
            {title}
        </div>
    )
}

export default SkillFreelancer