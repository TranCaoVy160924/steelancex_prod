'use client'
import { BiSearch } from "react-icons/bi"
import { FormatCusSm } from "../modal"
import { useTranslation } from "react-i18next"

const GetStarted = () => {
    const { t } = useTranslation()
    return (
        <FormatCusSm>
            <div className="
                    flex 
                    flex-row 
                    w-full
                "
            >
                <h1 className="
                        font-bold 
                        text-[60px]
                    "
                >{t("Are you looking for")} <br />{t("Freelancers")} ?
                </h1>
            </div>
            <div className="
                        flex 
                        flex-row 
                        w-full 
                        mt-10 
                        mb-10
                    "
            >
                <h1 className="
                            text-2xl 
                            leading-[30px] 
                            
                            font-normal 
                            text-gray-900 
                            text-opacity-60
                        "
                >
                    <span>{t("Hire")} </span>
                    <span className="font-semibold">
                    {t("great freelancers, Fast")}
                    </span>
                    . {t("SteelanceX will help")}
                    <br />
                    {t("you hire elite freelancers at a moments notice")}
                </h1>
            </div>
            <div className="
                    flex 
                    flex-row 
                    w-full 
                    pt-20
                "
            >
                <button
                    // onClick={() => { }}
                    className="
                        w-auto
                        md:w-auto
                        text-sm
                        py-5
                        px-10
                        bg-pink-cus-bt
                        text-white
                        font-semibold
                        transition
                        cursor-pointer
                        hover:bg-pink-600
                        rounded-[10px]
                        text-[20px]
                        whitespace-nowrap
                    "
                >
                    {t("Hire a freelancer")}
                </button>
                <div className="ml-10">
                    <div className="
                            flex 
                            flex-row-reverse 
                            bg-white 
                            shadow-md 
                            py-2 
                            px-3 
                            rounded-[10px]
                        "
                    >
                        <div className="
                                p-4 
                                bg-pink-cus-bt 
                                rounded-full 
                                text-white 
                                ml-5
                                cursor-pointer
                            "
                            // onClick={() => { }}
                        >
                            <BiSearch size={18} />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder={t("Search freelance work") ?? ""}
                                className="
                                    w-full 
                                    ml-5 
                                    mr-10 
                                    px-3 
                                    py-3 
                                    focus:outline-none
                                    border-0
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FormatCusSm>
    )
}

export default GetStarted