import Container from "./Container"
import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { GrFacebookOption, GrLocation } from "react-icons/gr"
import { TbPhoneCall } from "react-icons/tb"
import { TfiEmail } from "react-icons/tfi"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className="
                w-full 
                h-cus-3
                bg-pink-cus-bg
            "
        >
            <div className="px-10">
                <Container>
                    <div className="
                            grid 
                            grid-cols-12 
                            gap-10 
                            px-10
                        "
                    >
                        <div className="col-span-4">
                            <div className="absolute">
                                <Image
                                    alt="Logo"
                                    height="200"
                                    width="300"
                                    src="/images/logo.png"
                                />
                            </div>
                            <section className="mt-[250px] w-[300px]">
                                <h1>
                                    {t("Powerful freelance marketplace system with an aim of")}
                                    {t("connecting users")} (Freelancers & Clients) {t("in a secure")}
                                    {t("and simple way.")}
                                </h1>
                            </section>
                            <div className="
                                    flex 
                                    flex-row 
                                    cursor-pointer
                                    gap-5
                                "
                            >
                                <AiFillInstagram size={40} />
                                <BsTwitter size={40} />
                                <GrFacebookOption size={40} />
                            </div>
                        </div>
                        <div className="
                                col-span-8 
                                mt-20
                                px-10 
                                py-10
                            "
                        >
                            <div className="
                                    flex 
                                    flex-row 
                                    justify-between
                                "
                            >
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        {t("For Clients")}
                                    </h2>
                                    <div>
                                        {t("Find Freelancers")}
                                    </div>
                                    <div>
                                        {t("Post Project")}
                                    </div>
                                    <div>
                                        {t("Refund Policy")}
                                    </div>
                                    <div>
                                        {t("Privacy Policy")}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        {t("For Freelancers")}
                                    </h2>
                                    <div>
                                        {t("Find Work")}
                                    </div>
                                    <div>
                                        {t("Create Account")}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="
                                            font-semibold 
                                            text-xl 
                                        "
                                    >
                                        {t("Contact Us")}
                                    </h2>
                                    <div className="
                                            flex 
                                            flex-row
                                            gap-2 
                                        "
                                    >
                                        <GrLocation className="mt-1" />
                                        <span>{t("Ho Chi Minh City")}</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row
                                            gap-2 
                                        "
                                    >
                                        <TbPhoneCall className="mt-1" />
                                        <span>+0000000</span>
                                    </div>
                                    <div className="
                                            flex 
                                            flex-row 
                                            gap-2 
                                        "
                                    >
                                        <TfiEmail className="mt-1" />
                                        <span>FreelanceX@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer