'use client'

import useEditModal from '@/hooks/useEditModal';
import CustomModal from './Modal';
import { useContext, useEffect, useState } from 'react';
import Input from './Input';
import FreelancerResponse from '@/models/freelancerResponse';
import { useTranslation } from "react-i18next"
import { MyContext } from '@/app/layout';
import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { JobSelect } from '../post';
import CategoryResponse from '@/models/categoryResponse';
import FreelancerService from '../../../services/freelancerProfiles';
import { toast } from 'react-toastify';

// interface Skill {
//     title: string;
// }

// interface Product {
//     src: string;
//     title: string;
// }

// interface ModalEditData {
//     src?: string;
//     title?: string,
//     lable?: string,
//     city?: string,
//     country?: string
//     price?: number
//     description?: string,
//     language?: string,
//     prior?: string,
//     skill?: Skill[],
//     product?: Product[]
// }

interface ModalEditProps {
    onSave: (value: FreelancerResponse) => void;
    categories: string[]
}

const ModalEdit: React.FC<ModalEditProps> = ({
    onSave,
    categories
}) => {
    const editModal = useEditModal();
    const { t } = useTranslation();
    const [selectedCat, setSelectedCats] = useState<CategoryResponse[]>([]);
    const { currentUser, currentFreelancer, setCurrentFreelancer } = useContext(MyContext);

    const schema = yup.object({
        ImageUrl: yup.string().url().required("Image url is required"),
        Fullname: yup.string().required("Name is required"),
        Title: yup.string().required("Title is required"),
        Address: yup.string().required("Address is required"),
        Description: yup.string().required("Description is required"),
        Price: yup.number().required("Price is required").min(1, "Price must be more than 1").typeError("Price must be a number"),
    }).required();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            ImageUrl: currentFreelancer.ImageUrl,
            Fullname: currentFreelancer.Fullname,
            Title: currentFreelancer.Title,
            Address: currentFreelancer.Address,
            Description: currentFreelancer.Description,
            Price: currentFreelancer.Price
        },
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        reset(currentFreelancer);
    }, [currentFreelancer]);

    // const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     const { value } = e.target;
    //     const skillArr = value.split(",").map((item) => ({ title: item.trim() }));
    //     setCurrentFreelancer((prevData) => ({
    //         ...prevData,
    //         skill: skillArr
    //     }));
    // };

    // const handleProductTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     const { name, value } = e.target;
    //     const index = parseInt(name.split("-")[1]);
    //     const updatedProduct = [...formData.product || []];
    //     updatedProduct[index] = {
    //         ...updatedProduct[index],
    //         title: value
    //     };
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         product: updatedProduct
    //     }));
    // };

    // const handleProductSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     const { name, value } = e.target;
    //     const index = parseInt(name.split("-")[1]);
    //     const updatedProduct = [...formData.product || []];
    //     updatedProduct[index] = {
    //         ...updatedProduct[index],
    //         src: value
    //     };
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         product: updatedProduct
    //     }));
    // };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setCurrentFreelancer((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    // const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setCurrentFreelancer((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        data.Id = currentFreelancer.Id
        data.Categories = selectedCat.map(c => c.Id);
        data.AppUserId = currentUser.Id;
        console.log(data);

        FreelancerService.edit(currentFreelancer.Id, data)
            .then((data) => {
                setCurrentFreelancer(data);
                toast.success("Profile updated");
                editModal.onClose();
            })
            .catch(err => {
                toast.error("Profile update fail");
            });
    }

    const onErrors = (err: any) => {
        console.log(err);
    }

    return (
        <CustomModal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            title="Edit Profile"
            width={"w-2/4"}
            height={"h-3/4"}
        >
            <form className="w-full px-10" onSubmit={handleSubmit(onSubmit, onErrors)}>
                <Input
                    id='ImageUrl'
                    label="ImageURL"
                    name="ImageUrl"
                    placeholder=''
                    value={currentFreelancer.ImageUrl}
                    register={register}
                    errors={errors}
                // onChange={handleInputChange}
                />
                <Input
                    id='Fullname'
                    label={t("Name") ?? ""}
                    name="Fullname"
                    value={currentFreelancer.Fullname}
                    register={register}
                    errors={errors}
                // onChange={handleInputChange}
                />
                <Input
                    id='Title'
                    label={t("Title") ?? ""}
                    name="Title"
                    value={currentFreelancer.Title}
                    register={register}
                    errors={errors}
                // onChange={handleInputChange}
                />
                <Input
                    id='Address'
                    label={t("Address") ?? ""}
                    name="Address"
                    value={currentFreelancer.Address}
                    register={register}
                    errors={errors}
                // onChange={handleInputChange}
                />
                {/* <Input
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                /> */}
                <Input
                    id='Price'
                    label={t("Price") ?? ""}
                    name="Price"
                    value={currentFreelancer.Price}
                    register={register}
                    errors={errors}
                // onChange={handleInputChange}
                />
                <label htmlFor="description" className='block text-xl font-semibold text-left'>{t("Description")}</label>
                <textarea
                    id='Description'
                    rows={5}
                    placeholder={t("Enter description") ?? ""}
                    defaultValue={currentFreelancer.Description}
                    {...register("Description")}
                    // value={currentFreelancer.Description}
                    // onChange={handleTextareaChange}
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                ></textarea>
                {errors && (
                <p className="text-red-600 font-semibold h-2">
                    {errors["Description"]?.message?.toString()}
                </p>
            )}
                {/* <Input
                    label="Language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                />
                <label htmlFor="prior" className='block text-xl font-semibold text-left'>Prior experience</label>
                <textarea
                    rows={2}
                    name="prior"
                    value={formData.prior}
                    onChange={handleTextareaChange}
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                ></textarea> */}
                <JobSelect
                    // title={t("What skills are needed?") ?? ""}
                    description="Skill"
                    name="projectSkills"
                    value={currentFreelancer.Categories}
                    // value={formData.projectSkills}
                    // onChange={handleProjectSkillsChange}
                    setSelectedCat={setSelectedCats}
                />
                {/* {formData.product &&
                    formData.product.map((item, index) => (
                        <div key={index}>
                            <Input
                                label={`Product ${index + 1} - Title`}
                                name={`product-${index}`}
                                value={item.title}
                                onChange={handleProductTitleChange}
                            />
                            <Input
                                label={`Product ${index + 1} - Src`}
                                name={`product-${index}-src`}
                                value={item.src}
                                onChange={handleProductSrcChange}
                            />
                        </div>
                    ))} */}
                <button type='submit' className='mt-4 text-pink-cus-tx hover:underline'>{t("Save")}</button>
            </form>
        </CustomModal>
    );
}

export default ModalEdit
