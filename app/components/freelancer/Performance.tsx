'use client'

interface PerformanceProps {
    percent?: number;
    title?: string;
}

const Performance: React.FC<PerformanceProps> = ({
    percent,
    title
}) => {
    return (
        <div className="
                flex 
                flex-row 
                space-x-5 
                text-xl
            "
        >
            <div className="text-pink-cus-tx">
                {percent}%
            </div>
            <h2>{title}</h2>
        </div>
    )
}

export default Performance