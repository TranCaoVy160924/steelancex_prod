'use client'

import Image from "next/image";
import Rating from "../Rating";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next"

interface FreelancerListProps {
    id: string;
    src: string;
    fullname?: string;
    title?: string;
    description?: string;
    price?: number;
    // star: number
}

const FreelancerList: React.FC<FreelancerListProps> = ({
    id,
    src,
    fullname: title,
    title: label,
    description,
    price,
    // star
}) => {
    const router = useRouter();

    const handleRentNow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(`/detail_freelancer/${id}`);
    };

    const { t } = useTranslation()

    return (
        <div className="
                grid 
                grid-cols-12 
                w-full 
                h-auto 
                bg-white 
                rounded-15 
                px-2 
                py-2 
                gap-10 
                shadow-lg
            "
        >
            <div className="col-span-2">
                <Image
                    alt="avatar"
                    width="150"
                    height="150"
                    src={src}
                />
            </div>
            <div className="col-span-10">
                <div className="
                        flex 
                        flex-col 
                        gap-3 
                        my-5
                    "
                >
                    <div className="
                            flex 
                            flex-row 
                            justify-between 
                            mr-10
                        "
                    >
                        <section>
                            <h1 className="text-3xl font-bold">
                                {title}
                            </h1>
                            <h2 className="text-xl font-semibold">
                                {label}
                            </h2>
                        </section>
                        <button
                            onClick={handleRentNow}
                            className="
                                bg-pink-cus-bt 
                                text-xl 
                                text-white 
                                font-bold 
                                h-12 
                                rounded-50 
                                px-8
                            "
                        >
                            {t("Rent now")}
                        </button>
                    </div>
                    <div className="
                            flex 
                            flex-row 
                            font-semibold 
                            gap-x-10
                        "
                    >
                        {/* <div className="flex flex-row gap-3">
                            {t("Rating:")} <Rating rating={star} maxStars={5} sizeCus={20}/>
                        </div> */}
                        <div className="gap-3">
                            {t("Price")}: {price}$/h
                        </div>
                    </div>
                    <p className="line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FreelancerList