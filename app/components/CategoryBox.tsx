import Image from "next/image";

interface CategoryBoxProps {
    image: string;
    label: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    image,
    label
}) => {
    return (
        <div className="
                col-span-1 
                md:col-span-1 
                pt-5 
                shadow-lg 
                rounded-full
                cursor-pointer
            "
        >
            <div className="relative">
                <Image
                    src={image}
                    alt="banner"
                    className="relative z-0 brightness-50"
                    height={250}
                    width={300}
                />
                <div className="
                        absolute 
                        inset-0 
                        flex 
                        items-center 
                        justify-center
                        p-5
                    "
                >
                    <div className="
                            font-semibold 
                            text-white 
                            text-2xl 
                            text-center
                            hover:text-pink-cus-bt
                        "
                    >
                        {label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBox