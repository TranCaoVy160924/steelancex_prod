import { IconType } from "react-icons"

interface QuickBoxProps {
    icon: IconType;
    label: string;
    description: string;
}

const QuickBox: React.FC<QuickBoxProps> = ({
    icon: Icon,
    label,
    description
}) => {
    return (
        <div className="
                flex
                flex-col
                items-center
                w-auto
                md:w-[350px]
                h-60
                shadow-sm
                rounded-12
                gap-5
            "
        >
            <div className='
                    p-4 
                    bg-blue-100 
                    rounded-full 
                    text-pink-cus-tx
                    cursor-pointer
                '
            >
                <Icon size={50} />
            </div>
            <div className="
                    font-semibold
                    text-3xl
                    text-center
                "
            >
                {label}
            </div>
            <div className="
                    text-2xl
                    text-gray-cus
                    text-center
                "
            >
                {description}
            </div>
        </div>
    )
}

export default QuickBox