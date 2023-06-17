'use client'

import FreelancerResponse from "@/models/freelancerResponse";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface OfferBusinessProps {
    freelancer: any
    showButton?: boolean; // Thêm prop showButton để kiểm soát việc hiển thị nút button
}

const OfferBusiness: React.FC<OfferBusinessProps> = ({
    freelancer,
    showButton = false, // Giá trị mặc định cho showButton là false
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation()

    const handleShowMore = () => {
        setIsExpanded(true);
    };

    const handleShowLess = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <div className="grid grid-cols-12 py-5 space-x-5">
                <div className="col-span-2">
                    <Link href={`/detail_freelancer/${freelancer.id}`}>
                        <Image
                            alt="avatar"
                            src={freelancer.imageUrl}
                            width="150"
                            height="150"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <>
                    <section className="col-span-6 space-y-5">
                        <Link href={`/detail_freelancer/${freelancer.id}`}>
                            <h1 className="font-bold">{freelancer.title}</h1>
                        </Link>
                        <p className={isExpanded ? "" : "line-clamp-6"}>{freelancer.description}</p>
                        {!isExpanded && (
                            <button onClick={handleShowMore} className="text-pink-cus-tx">
                                {t("Show More")}
                            </button>
                        )}
                        {isExpanded && (
                            <button onClick={handleShowLess} className="text-pink-cus-tx">
                                {t("Show Less")}
                            </button>
                        )}
                    </section>
                    <div className="col-span-4 text-center">
                        <h2 className="font-bold text-pink-cus-bt">
                            {freelancer.price}$
                            {/* <span className="text-black font-medium"> {t("in")} {item.date} {t("Date")}</span> */}
                        </h2>
                    </div>
                </>
                {showButton && ( // Kiểm tra nếu showButton là true thì hiển thị nút button
                    <div className="col-span-12 flex justify-end">
                        <Link href={`/detail_freelancer/${freelancer.id}`}>
                            <div className="text-pink-cus-tx hover:underline">{t("Choose")}</div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="border-b-2"></div>
        </>
    );
};

export default OfferBusiness;
