'use client'
import { useTranslation } from "react-i18next"
const ButtonCus = () => {
    const { t } = useTranslation()
    return (
        <div className="
                flex 
                flex-row 
                justify-center 
                items-center
                mt-10
            "
        >
            <button
                // onClick={() => { }}
                className="
                    text-sm
                    px-10
                    py-5
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
                {t("More Categories")}
            </button>
        </div>
    )
}

export default ButtonCus