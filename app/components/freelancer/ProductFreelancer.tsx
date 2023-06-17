'use client'

import { useState } from "react";
import ProductItem from "./ProductItem";
import { useTranslation } from "react-i18next"

interface ProductItem {
    src: string;
    title?: string;
}

interface ProductFreelancerProps {
    product?: ProductItem[];
}

const ProductFreelancer: React.FC<ProductFreelancerProps> = ({ product }) => {
    const [showMore, setShowMore] = useState(false);

    const visibleProducts = showMore ? product : product?.slice(0, 6);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-3 gap-3">
            {visibleProducts?.map((item) => (
                <ProductItem 
                    key={item.title} 
                    src={item.src} 
                    title={item.title}
                />
            ))}
            {product && product.length > 6 && (
                <div className="col-span-3 text-center">
                    {!showMore ? (
                        <button
                            onClick={toggleShowMore}
                            className="
                                text-pink-cus-tx 
                                text-xl 
                                hover:underline
                            "
                        >
                            {t("More")}
                        </button>
                    ) : (
                        <button
                            onClick={toggleShowMore}
                            className="
                                text-pink-cus-tx 
                                text-xl 
                                hover:underline
                            "
                        >
                            {t("Less")}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductFreelancer;
