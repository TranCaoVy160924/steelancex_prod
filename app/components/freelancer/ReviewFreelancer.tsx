'use client'

import Image from "next/image"
import Rating from "../Rating"
import { FcMoneyTransfer } from "react-icons/fc"
import { AiFillLike } from "react-icons/ai";
import { useTranslation } from "react-i18next"

interface ReviewFreelancer {
    src: string;
    title?: string;
    // star: number;
    address?: string;
    // country?: string;
    price?: number;
    // recommence?: number;
}

const ReviewFreelancer: React.FC<ReviewFreelancer> = ({
    src,
    title,
    // star,
    address,
    // country,
    price,
    // recommence
}) => {
    const { t } = useTranslation()
    return (
        <div className="
                bg-white 
                rounded-15 
                text-xl 
                shadow-lg
            "
        >
            <div className="
                    flex 
                    flex-col 
                    py-20 
                    items-center 
                    gap-5
                "
            >
                <Image
                    alt="avatar"
                    src={src}
                    height="150"
                    width="150"
                    className="
                        rounded-full 
                        border-2 
                        border-pink-cus-bt
                    "
                />
                <h1 className="text-2xl font-medium">
                    {title}
                </h1>
                {/* <Rating rating={star} maxStars={5} sizeCus={30} /> */}
                <h2>
                    {address}
                </h2>
                {/* <h2>
                    {country}
                </h2> */}
            </div>
            <div className="border-b-2"></div>
            <div className="
                    flex 
                    flex-col 
                    p-2 
                    py-5 
                    gap-5
                    text-[15px]
                "
            >
                <div className="flex flex-row items-center gap-3">
                    <FcMoneyTransfer size={30} />
                    <h2>
                    {t("Desired salary")}
                        <span className="font-semibold"> ${price}/h</span>
                    </h2>
                </div>
                {/* <div className="flex flex-row items-center gap-3">
                    <AiFillLike size={30}/>
                    <h2>
                        {recommence} {t("Recommenced")}
                    </h2>
                </div> */}
            </div>
        </div>
    )
}

export default ReviewFreelancer