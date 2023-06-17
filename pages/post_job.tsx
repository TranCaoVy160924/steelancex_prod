'use client'

import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import {
    Container,
    FormatCusMd,
    JobFormat,
    JobInformation,
    JobInput,
    JobPayment,
    JobSelect,
} from '@/app/components';
import { optionSkill } from '@/app/constants';
import JobDateInput from '@/app/components/post/JobDateInput';
import * as Yup from 'yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CategoryResponse from '@/models/categoryResponse';
import BusinessProfileResponse from '@/models/businessProfileResponse';
import { MyContext } from '@/app/layout';
import BusinessProfileService from '../services/businessProfiles';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import JobService from '../services/jobs';

const Post_job = () => {
    const { t } = useTranslation()
    const router = useRouter();
    const schema = Yup.object({
        Name: Yup.string().required('Name is required'),
        Description: Yup.string().required('Description is required'),
        Offer: Yup.number().required('').positive().min(1),
        ApplyExpireDate: Yup.date().required('Expire date is required').min(new Date().toISOString().split('T')[0]),
    });

    // const [formData, setFormData] = useState({
    //     projectName: '',
    //     projectDescription: '',
    //     projectSkills: [],
    //     paymentType: '',
    //     budget: '',
    // })

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            Name: '',
            Description: '',
            Offer: 0,
            ApplyExpireDate: new Date(),
        },
        resolver: yupResolver(schema)
    });
    const [selectedCat, setSelectedCats] = useState<CategoryResponse[]>([]);
    const [paymentType, setPaymentType] = useState('hour');
    const [business, setBusiness] = useState<BusinessProfileResponse>();
    const context = useContext(MyContext);

    useEffect(() => {
        if (context.currentUser.Id === 0) {
            router.push("/");
        }
        BusinessProfileService.getByUserId(context.currentUser.Id)
            .then(businessProfileResponse => {
                setBusiness(businessProfileResponse.value[0])
            })
            .catch(err => {
                toast.error("You dont have an business profile")
                router.push("/");
            })
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        data.CreatedDate = new Date();
        data.BusinessProfileId = business?.Id;
        data.Categories = selectedCat.map(c => c.Id);
        console.log(data);
        JobService.postJob(data)
            .then((response: any) => {
                toast.success("Create new job successfully");
                router.push("/")
            })
            .catch((error: any) => {
                toast.error("Create job unsuccessfully");
            })
    }

    const handlePaymentTypeChange = (paymentType: string) => {
        // setFormData((prevData) => ({
        //     ...prevData,
        //     paymentType,
        //     budget: '',
        // }));
        setPaymentType(paymentType);
    };

    // const handleInputChange = (name: string, value: string) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // const handleProjectSkillsChange = (skills: string[]) => {
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     setFormData((prevData: any) => ({
    //         ...prevData,
    //         projectSkills: skills,
    //     }));
    // };

    const jobNameContent = (
        <JobInput
            label={t("Choose a name for your project") ?? ""}
            number={1}
            name="Name"
            register={register}
            errors={errors}
        />
    );

    const expireDateContent = (
        <JobDateInput
            label={t("Application expire date") ?? ""}
            name="ApplyExpireDate"
            min={new Date().toISOString().split('T')[0]}
            register={register}
            errors={errors}
        />
    );

    const JobDescriptionContent = (
        <JobInput
            label={t("Tell us more about your project") ?? ""}
            number={5}
            name="Description"
            register={register}
            errors={errors}
        />
    );

    const JobSelectContent = (
        <JobSelect
            title={t("What skills are needed?") ?? ""}
            description="Fill in up to 5 skills to best describe your project. Freelancers will use these skills to find projects that interest them and have the most experience."
            name="projectSkills"
            value={[]}
            // value={formData.projectSkills}
            // onChange={handleProjectSkillsChange}
            setSelectedCat={setSelectedCats}
        />
    );

    const JobPaymentContent = (
        <JobPayment
            title={t("How do you want to pay?") ?? ""}
            paymentType={paymentType}
            onChange={handlePaymentTypeChange}
        />
    );

    const JobPriceContent = (
        <div className="space-y-3">
            <label htmlFor="budget">{t("What is your expected budget?")}</label>

            <input
                type="number"
                // value={formData.budget}
                {...register("Offer")}
                // onChange={(e) => handleInputChange('budget', e.target.value)}
                placeholder={t("Enter money") ?? ""}
                className="w-full border-[1px] border-pink-cus-tx rounded-[5px] p-2"
            />
            {errors && (
                <p className="text-red-600 font-semibold h-2">
                    {errors["Offer"]?.message?.toString()}
                </p>
            )}
        </div>
    );

    const JobInformationContent = (
        <>
            <div className="space-y-3">
                <JobInformation
                    title="Is this information accurate?"
                    paymentType={paymentType}
                    budget={watch("Offer")}
                    projectName={watch("Name")}
                    projectDescription={watch("Description")}
                    projectSkills={selectedCat.map(c => c.Name)}
                />
            </div>
            <div>
                <button className="
                        bg-pink-cus-bt 
                        text-white 
                        p-4 
                        rounded-15
                    "
                    type='submit'
                >
                    {t("YES, Post the project!")}
                </button>
            </div>
        </>
    );

    return (
        <FormatCusMd>
            <Container>
                <JobFormat
                    title="Let us know what you need to get done"
                    label="Contact skilled freelancers in minutes. View profiles, reviews, portfolio and chat with them. Only pay freelancers when you are 100% satisfied with their work."
                    jobName={jobNameContent}
                    jobExpireDate={expireDateContent}
                    jobDescription={JobDescriptionContent}
                    jobSelect={JobSelectContent}
                    jobPayment={JobPaymentContent}
                    jobPrice={JobPriceContent || null}
                    jobInformation={JobInformationContent || null}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                />
            </Container>
        </FormatCusMd>
    );
};

export default Post_job;
