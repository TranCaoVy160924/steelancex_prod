import Image from "next/image"
import { useTranslation } from "react-i18next"

interface RecentBoxProps {
    src: string;
    label: string;
    description: string;
    price: string
}

const RecentBox: React.FC<RecentBoxProps> = ({
    src,
    label,
    description,
    price
}) => {
    const { t } = useTranslation()

    return (
        <div className="
                flex 
                flex-col 
                justify-between
                items-center
                w-auto
                md:w-[330px]
                shadow-lg
                rounded-12
                gap-10
            "
        >
            <Image
                alt="Recent"
                className="mt-10"
                height="80"
                width="80"
                src={src}
            />
            <section className="
                    text-center 
                    px-2
                "
            >
                <h1 className="
                        text-2xl 
                        font-semibold 
                    "
                >
                    {label}
                </h1>
                <h1 className="
                        text-gray-cus 
                        text-xl 
                        px-6 
                        text-center
                    "
                >
                    {description}
                </h1>
            </section>
            <section className="
                    flex 
                    flex-row 
                    justify-between
                    items-center 
                    my-10
                    gap-10
                "
            >
                <h1 className="
                        text-xl 
                        text-center 
                        text-gray-cus 
                    "
                >
                    {t("Highest bid")}
                    <br />
                    ${price}
                </h1>
                <h1 className="
                        text-xl 
                        text-pink-cus-tx 
                        underline
                        cursor-pointer
                        text-center
                    "
                >
                    {t("Apply now")}
                </h1>
            </section>
        </div>
    )
}

export default RecentBox