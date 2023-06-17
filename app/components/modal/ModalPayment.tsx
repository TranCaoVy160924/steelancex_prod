import usePaymentModal from '@/hooks/usePaymentModal';
import CustomModal from './Modal';
import Input from './Input';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { useTranslation } from "react-i18next"
import FreelancerResponse from '@/models/freelancerResponse';
import { useEffect } from 'react';

interface ModelPaymentProps {
    freelancer?: FreelancerResponse
}

const ModalPayment: React.FC<ModelPaymentProps> = ({ freelancer }) => {
    const paymentModal = usePaymentModal();
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            phone: '',
        }
    });


    if (!freelancer) {
        return <></>
    }

    return (
        <CustomModal
            isOpen={paymentModal.isOpen}
            onClose={paymentModal.onClose}
            title="Payment"
            width={"w-2/4"}
        >
            <div className="block mb-1 text-left text-xl font-semibold">
                Email
            </div>
            <div
                className={`
                            pr-2 h-10 pl-4
                            w-full 
                            rounded-15 
                            border-[1px] 
                            border-pink-cus-tx
                            hover:border-pink-cus-bt  
                            text-xl 
                        `
                }
            >{freelancer.Email}</div>
            <div className="block mb-1 text-left text-xl font-semibold">
                Phone
            </div>
            <div
                className={`
                            pr-2 h-10 pl-4
                            w-full 
                            rounded-15 
                            border-[1px] 
                            border-pink-cus-tx
                            hover:border-pink-cus-bt  
                            text-xl 
                        `
                }
            >{freelancer.Phone}</div>
        </CustomModal>
    );
};

export default ModalPayment;
