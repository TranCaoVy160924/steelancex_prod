'use client'

import useQrModal from '@/hooks/useQrModal';
import CustomModal from './Modal';
import Image from 'next/image'
import { useTranslation } from "react-i18next"

const QrMomo = () => {
    const qrModal = useQrModal()
    const { t } = useTranslation()

    return (
        <CustomModal
            isOpen={qrModal.isOpen}
            onClose={qrModal.onClose}
            title={t("Momo Payment") ?? ""}
        >
            <Image src="/images/MomoQR.jpg" alt="Momo QR Code" className="mb-4" width={300} height={300}/>
            <p>{t("Scan the QR code with your Momo app to make the payment.")}</p>
        </CustomModal>
    );
}

export default QrMomo