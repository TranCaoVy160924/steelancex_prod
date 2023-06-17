'use client'

import { useEffect, useState } from "react";
import { Input, QrMomo } from "../modal";
import {
    // FieldValue,
    FieldValues,
    // SubmitHandler,
    useForm
} from "react-hook-form"
import { useTranslation } from "react-i18next";
import { ta } from "date-fns/locale";
import { UserInfo } from "@/services/auth";
import FreelancerService from '../../../services/freelancerProfiles';
import { toast } from "react-toastify";

interface DetailBusinessProps {
    id: string;
    description?: string;
    skills?: string;
    openDateLeft: number;
    currentUser: UserInfo;
    useQr: any
}

const DetailBusiness: React.FC<DetailBusinessProps> = ({
    id,
    openDateLeft,
    description,
    skills,
    currentUser,
    useQr
}) => {
    const [projectStatus, setProjectStatus] = useState("Complete");
    const { t } = useTranslation()

    const {
        register,
        // handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        if (openDateLeft > 0) {
            setProjectStatus("Open")
        }
    }, [openDateLeft])

    const handleApply = (e: any) => {
        e.preventDefault();
        if (!currentUser.IsPremium) {
            useQr.onOpen();
        }
        else {
            FreelancerService.applyToJob(parseInt(id))
                .then(response => {
                    toast.success(response);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="
                flex 
                flex-col 
                bg-white 
                shadow-lg 
                p-6 
                space-y-4 
                text-xl
            "
        >
            <h1>{t("Job Description:")}</h1>
            <p>{description}</p>
            <h2>{t("Skill")}: {skills}</h2>
            <h2>{t("ID project")}: #{id}</h2>
            <div className="border-b-2"></div>
            <div className="
                    grid 
                    grid-cols-3 
                    justify-between 
                    items-center
                "
            >
                <div className="col-span-2">
                    {projectStatus === "Open" && (
                        <h2 className="font-bold">
                            {t("Submit a job offer for this job now!")} <br /> {t("Close offer after")} {openDateLeft} {t("Date")}
                        </h2>
                    )}
                    {projectStatus === "Complete" && (
                        <h2 className="font-bold">
                            {t("Project complete")}
                        </h2>
                    )}
                    {projectStatus === "Close" && (
                        <h2 className="font-bold">
                            {t("Project closed")}
                        </h2>
                    )}
                </div>
                <div className="col-span-1 pl-20">
                    {projectStatus === "Open" && (
                        <div className="
                                text-[15px] 
                                p-2 
                                bg-green-200 
                                rounded-full 
                                text-center 
                                text-green-500 
                                font-semibold
                            "
                        >
                            {t("Open")}
                        </div>
                    )}
                    {projectStatus === "Complete" && (
                        <div className="
                                text-[15px] 
                                p-2 
                                bg-gray-400 
                                rounded-full 
                                text-center 
                                text-blue-cus 
                                font-semibold
                            "
                        >
                            {t("Project complete")}
                        </div>
                    )}
                    {projectStatus === "Close" && (
                        <div className="
                                text-[15px] 
                                p-2 
                                bg-gray-cus 
                                rounded-full 
                                text-center 
                                text-blue-cus 
                                font-semibold
                            "
                        >
                            {t("Project Close")}
                        </div>
                    )}
                </div>
            </div>
            {projectStatus === "Open" && (
                <form className="
                    flex 
                    flex-row 
                    justify-between 
                    items-center 
                    gap-3
                "
                >
                    {/* <div className="w-full">
                        <h2 className="text-[15px] font-semibold">
                            {t("Offer your price")}
                        </h2>
                        <Input
                            id="offer"
                            placeholder={t("Your offer") ?? ""}
                            type="text"
                            register={register}
                            errors={errors}
                        />
                    </div >
                    <div className="w-full">
                        <h2 className="text-[15px] font-semibold">
                            {t("Your Mail")}
                        </h2>
                        <Input
                            id="email"
                            placeholder="Mail"
                            type="Email"
                            register={register}
                            errors={errors}
                        />
                    </div > */}
                    <div className="w-full">
                        <button
                            onClick={handleApply}
                            className="
                            bg-pink-cus-bt 
                            text-white 
                            font-semibold
                            text-2xl 
                            w-full 
                            py-4
                        "
                        >
                            {/* {t("Offer for Job")} */}
                            Ứng tuyển
                        </button>
                    </div>
                </form >
            )}
            {
                projectStatus === "Complete" && (
                    <div>

                    </div>
                )
            }
        </div >
    )
}

export default DetailBusiness