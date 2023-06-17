'use client'

import Image from "next/image"

interface ProductItemProps {
    src: string;
    title?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
    src,
    title,
}) => {
    return (
        <div className="col-span-1 cursor-pointer">
            <div className="relative group">
                <Image
                    alt="product"
                    src={src}
                    height={300}
                    width={300}
                />
                <div className="
                        absolute 
                        bottom-0 
                        left-0 
                        w-full 
                        bg-white 
                        bg-opacity-0 
                        group-hover:bg-opacity-75 
                        py-2 text-center 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-300
                    "
                >
                    <span className="text-lg font-bold">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem