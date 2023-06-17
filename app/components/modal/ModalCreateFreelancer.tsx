import useCreateModal from '@/hooks/useCreateModal';
import CustomModal from './Modal';
import Input from './Input';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { useTranslation } from "react-i18next"

const ModalCreate = () => {
    const createModal = useCreateModal();
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            src: '',
            name: '',
            review: '',
            address: '',
            price: '',
            description: '',
            skill: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <CustomModal
            isOpen={createModal.isOpen}
            onClose={createModal.onClose}
            title={t("Create Item") ?? ""}
            width={"w-2/4"}
            height={"h-3/4"}
        >
            <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="src"
                    label="ImageURL"
                    placeholder={t("Enter imageURL") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <Input
                    id="name"
                    label={t("Name") ?? ""} 
                    placeholder={t("Enter name") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <Input
                    id="title"
                    label={t("Review") ?? ""} 
                    placeholder={t("Enter review") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <Input
                    id="address"
                    label={t("Address") ?? ""} 
                    placeholder={t("Enter Address") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <Input
                    id="price"
                    label={t("Price") ?? ""} 
                    placeholder={t("Enter Price") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <label htmlFor="description" className='block text-xl font-semibold text-left'>{t("Description")}</label>
                <textarea
                    rows={5}
                    placeholder={t("Enter description") ?? ""} 
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                    {...register("description")}
                ></textarea>
                <Input
                    id="skill"
                    label={t("Skill") ?? ""} 
                    placeholder={t("Enter Skill") ?? ""} 
                    register={register}
                    errors={errors}
                />
                <button type="submit" className='mt-4 text-pink-cus-tx hover:underline'>{t("Create")}</button>
            </form>
        </CustomModal>
    );
};

export default ModalCreate;
