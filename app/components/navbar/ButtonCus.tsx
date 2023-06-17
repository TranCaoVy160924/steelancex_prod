'use client'

import { MyContext } from "@/app/layout"
import useCreateModal from "@/hooks/useCreateModal"
import useEditModal from "@/hooks/useEditModal"
import useQrModal from "@/hooks/useQrModal"
import { UserInfo } from "@/services/auth"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

const ButtonCus: React.FC = () => {
    const { currentUser } = useContext(MyContext);
    const router = useRouter()
    const editModal = useEditModal();
    const createModel = useCreateModal();
    const qrModal = useQrModal();
    const { t } = useTranslation();

    const handleProfileButtonClick = () => {
        if (currentUser.IsPremium) {
            editModal.onOpen();
        }
        else {
            qrModal.onOpen();
        }
    };

    const handlePostJobButtonClick = () => {
        if (currentUser.IsPremium) {
            router.push('/post_job');
        }
        else {
            qrModal.onOpen();
        }
    }

    return (
        <div className="relative">
            <div className="
                    flex 
                    flex-row 
                    items-center 
                    gap-3
                "
            >
                {currentUser.Id !== 0 ? (
                    <button
                        onClick={currentUser.Role === "Business" ? handlePostJobButtonClick : handleProfileButtonClick}
                        className="
                        hidden
                        w-full
                        md:block
                        text-sm
                        py-3
                        px-4
                        bg-pink-cus-bt
                        text-white
                        font-semibold
                        rounded-full
                        transition
                        cursor-pointer
                        hover:bg-pink-600
                    "
                        style={{ width: 'fit-content' }}
                    >
                        {currentUser.Role === "Business" ? `${t("Post a project")}` : `${t("Your freelancer profile")}`}
                    </button>
                ) : (
                    <button
                        onClick={() => router.push("/login")}
                        className="
                        hidden
                        w-full
                        md:block
                        text-sm
                        py-3
                        px-4
                        bg-pink-cus-bt
                        text-white
                        font-semibold
                        rounded-full
                        transition
                        cursor-pointer
                        hover:bg-pink-600
                    "
                        style={{ width: 'fit-content' }}
                    >
                        Bắt đầu
                    </button>
                )}
            </div>
        </div>
    )
}

export default ButtonCus